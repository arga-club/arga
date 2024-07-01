import hre, { upgrades } from 'hardhat'
import ms from 'ms'
import { Arga, ArgaDeclaration } from '../typechain-types'
import assert from 'assert'
import { ContractTransactionResponse } from 'ethers'
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers'
import { DeclarationStruct } from '../typechain-types/contracts/Arga'

export const getSigners = async () => {
	const [owner, actor, witness, other] = await hre.ethers.getSigners()
	return { owner, actor, witness, other }
}
export const deploy = async () => {
	const { owner } = await getSigners()
	const argaDeclarationContract = await hre.ethers.getContractFactory('ArgaDeclaration')
	const argaDeclaration = (await upgrades.deployProxy(argaDeclarationContract, [owner.address], {
		kind: 'uups',
	})) as unknown as ArgaDeclaration
	await argaDeclaration.waitForDeployment()
	const argaContract = await hre.ethers.getContractFactory('Arga')
	const arga = (await upgrades.deployProxy(argaContract, [owner.address, await argaDeclaration.getAddress()], {
		kind: 'uups',
	})) as unknown as Arga
	await arga.waitForDeployment()
	await argaDeclaration.setParentContract(await arga.getAddress())
	return { arga, argaDeclaration }
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
