import hre from 'hardhat'
import ms from 'ms'
import { ArgaDiamond, ArgaLibrary } from '../typechain-types'
import assert from 'assert'
import { ContractTransactionResponse, FunctionFragment, BaseContract, BigNumberish } from 'ethers'
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers'

export const getSigners = async () => {
	const [owner, actor, witness, other] = await hre.ethers.getSigners()
	return { owner, actor, witness, other }
}

const FacetCutAction = { Add: 0, Replace: 1, Remove: 2 }

function getSelectors(contract: BaseContract) {
	const selectors = Object.values(contract.interface.fragments)
		.filter((fragment): fragment is FunctionFragment => fragment.type === 'function')
		.filter(fragment => fragment.format() !== 'init(bytes)')
		.map(fragment => fragment.selector)
	return selectors
}

export type ContractName = 'Arga' | 'ArgaDeclaration' | 'ArgaPool'

export const deployContract = async <C extends BaseContract>({
	deployTransaction,
}: {
	name: string
	deployTransaction: Promise<C>
}) => {
	const deployed = await deployTransaction
	await deployed.waitForDeployment()
	return deployed
}

export const deploy = async ({ owner: ownerArg }: { owner?: string } = {}) => {
	const owner = ownerArg ?? '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'

	const DiamondCutFacet = await deployContract({
		name: 'DiamondCutFacet',
		deployTransaction: hre.ethers.deployContract('DiamondCutFacet'),
	})
	const Arga = await deployContract({
		name: 'Arga',
		deployTransaction: hre.ethers.deployContract('Arga', [owner, await DiamondCutFacet.getAddress()]),
	})
	const DiamondInit = await deployContract({
		name: 'DiamondInit',
		deployTransaction: hre.ethers.deployContract('DiamondInit'),
	})

	const facetCuts = await Promise.all(
		[
			deployContract({
				name: 'DiamondLoupeFacet',
				deployTransaction: hre.ethers.deployContract('DiamondLoupeFacet'),
			}),
			deployContract({ name: 'OwnershipFacet', deployTransaction: hre.ethers.deployContract('OwnershipFacet') }),
			deployContract({ name: 'DeclarationFacet', deployTransaction: hre.ethers.deployContract('DeclarationFacet') }),
			deployContract({ name: 'PoolFacet', deployTransaction: hre.ethers.deployContract('PoolFacet') }),
			deployContract({ name: 'RedemptionFacet', deployTransaction: hre.ethers.deployContract('RedemptionFacet') }),
			deployContract({ name: 'TreasuryFacet', deployTransaction: hre.ethers.deployContract('TreasuryFacet') }),
		].map(async facetDeploying => {
			const facet = await facetDeploying
			return {
				facetAddress: await facet.getAddress(),
				action: FacetCutAction.Add,
				functionSelectors: getSelectors(facet),
			}
		}),
	)

	const DiamondCut = await hre.ethers.getContractAt('IDiamondCut', await Arga.getAddress())
	const initFunctionCall = DiamondInit.interface.encodeFunctionData('init', [owner])
	const diamondCutTransaction = await DiamondCut.diamondCut(
		facetCuts,
		await DiamondInit.getAddress(),
		initFunctionCall,
	)
	const diamondCutReceipt = await diamondCutTransaction.wait()
	if (!diamondCutReceipt?.status) {
		throw Error(`Diamond upgrade failed: ${diamondCutTransaction.hash}`)
	}

	const ArgaDiamond = await hre.ethers.getContractAt('ArgaDiamond', await Arga.getAddress())

	return {
		arga: ArgaDiamond,
	}
}

export const declarationStatus = {
	active: 0n,
	proofSubmitted: 1n,
	approved: 2n,
	rejected: 3n,
}

export const declaration: ArgaLibrary.DeclarationStruct = {
	id: 0n,
	status: declarationStatus.active,
	summary: 'successfully test Arga contract',
	description:
		'this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description',
	actor: hre.ethers.ZeroAddress,
	witness: hre.ethers.ZeroAddress,
	startDate: BigInt(Date.now()),
	endDate: BigInt(Date.now() + ms('5d')),
	witnessByDate: BigInt(Date.now() + ms('10d')),
	collateral: {
		value: hre.ethers.parseEther('1'),
		erc20Address: hre.ethers.ZeroAddress,
	},
	proof: '',
}

export const proof = 'test proof value'
export const value = hre.ethers.parseEther('1')

export const makeDeclaration = async ({
	arga,
	actor,
	witness,
}: {
	arga: ArgaDiamond
	actor: HardhatEthersSigner
	witness: HardhatEthersSigner
}) => {
	await arga
		.connect(actor)
		.declareWithEther(
			declaration.summary,
			declaration.description,
			actor.address,
			witness.address,
			declaration.startDate,
			declaration.endDate,
			declaration.witnessByDate,
			{ value },
		)
	const expectedDeclaration = [
		declaration.id,
		declaration.status,
		declaration.summary,
		declaration.description,
		actor.address,
		witness.address,
		declaration.startDate,
		declaration.endDate,
		declaration.witnessByDate,
		[value, hre.ethers.ZeroAddress],
		declaration.proof,
	] as const
	return { expectedDeclaration }
}

export const submitDeclarationProof = async ({
	arga,
	actor,
	witness,
	id,
}: {
	arga: ArgaDiamond
	actor: HardhatEthersSigner
	witness: HardhatEthersSigner
	id?: BigNumberish
}) => {
	await arga.connect(actor).submitDeclarationProof(declaration.id, proof)
	const expectedDeclaration = [
		id ?? declaration.id,
		declaration.status,
		declaration.summary,
		declaration.description,
		actor.address,
		witness.address,
		declaration.startDate,
		declaration.endDate,
		declaration.witnessByDate,
		[value, hre.ethers.ZeroAddress],
		proof,
	]
	return { expectedDeclaration }
}

export const gasUsedForTransaction = async (transaction: ContractTransactionResponse) => {
	const receipt = await transaction.wait()
	assert(receipt, 'No receipt!')
	return receipt.cumulativeGasUsed * receipt.gasPrice
}
