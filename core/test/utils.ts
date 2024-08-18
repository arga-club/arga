import hre from 'hardhat'
import ms from 'ms'
import { ArgaDiamond, ArgaLibrary } from '../typechain-types'
import assert from 'assert'
import { ContractTransactionResponse, BaseContract, BigNumberish } from 'ethers'
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers'
import { bytesToHex } from 'viem'

export const getSigners = async () => {
	const [owner, actor, witness, other] = await hre.ethers.getSigners()
	return { owner, actor, witness, other }
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
	drawId: 0n,
}

export const randomNumberForDraw = () => {
	const randomBytes = crypto.getRandomValues(new Uint8Array(32))
	const randomHex = bytesToHex(randomBytes)
	return randomHex
}

export const proof = 'test proof value'
export const value = hre.ethers.parseEther('1')

export const withoutDrawId = (declaration: ArgaLibrary.DeclarationStructOutput) => declaration.slice(0, -1)

export const waitForTransaction = async (response: ContractTransactionResponse) => {
	await response.wait()
	return response
}

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
