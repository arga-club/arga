import hre, { upgrades } from 'hardhat'
import ms from 'ms'
import { Arga, ArgaDeclaration, ArgaPool } from '../typechain-types'
import assert from 'assert'
import { ContractTransactionResponse } from 'ethers'
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers'
import { DeclarationStruct } from '../typechain-types/contracts/ArgaDeclarations'

export const getSigners = async () => {
	const [owner, actor, witness, other] = await hre.ethers.getSigners()
	return { owner, actor, witness, other }
}

type ContractName = 'Arga' | 'ArgaDeclaration' | 'ArgaPool'

export const deployUUPSContract = async <T extends Arga | ArgaDeclaration | ArgaPool>(
	name: ContractName,
	ownerAddress: string,
) => {
	const contractFactory = await hre.ethers.getContractFactory(name)
	const contractDeployed = (await upgrades.deployProxy(contractFactory, [ownerAddress], {
		kind: 'uups',
	})) as unknown as T
	await contractDeployed.waitForDeployment()
	return [contractDeployed, await contractDeployed.getAddress()] as const
}
export const deploy = async () => {
	const { owner } = await getSigners()
	const [argaDeclaration, argaDeclarationAddress] = await deployUUPSContract<ArgaDeclaration>(
		'ArgaDeclaration',
		owner.address,
	)
	const [argaPool, argaPoolAddress] = await deployUUPSContract<ArgaPool>('ArgaPool', owner.address)
	const argaContract = await hre.ethers.getContractFactory('Arga')
	const arga = (await upgrades.deployProxy(argaContract, [owner.address, argaDeclarationAddress, argaPoolAddress], {
		kind: 'uups',
	})) as unknown as Arga
	await arga.waitForDeployment()
	await argaDeclaration.setParentContract(await arga.getAddress())
	await argaPool.setParentContract(await arga.getAddress())
	return { arga, argaDeclaration, argaPool }
}

export const declarationStatus = {
	active: 0n,
	proofSubmitted: 1n,
	approved: 2n,
	rejected: 3n,
}

export const declaration: DeclarationStruct = {
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
	arga: Arga
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
}: {
	arga: Arga
	actor: HardhatEthersSigner
	witness: HardhatEthersSigner
}) => {
	await arga.connect(actor).submitDeclarationProof(declaration.id, proof)
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
		proof,
	]
	return { expectedDeclaration }
}

export const gasUsedForTransaction = async (transaction: ContractTransactionResponse) => {
	const receipt = await transaction.wait()
	assert(receipt, 'No receipt!')
	return receipt.cumulativeGasUsed * receipt.gasPrice
}
