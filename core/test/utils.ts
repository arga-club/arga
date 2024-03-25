import hre from 'hardhat'
import ms from 'ms'
import { Arga } from '../typechain-types'

const fixture = async () => {
	// @ts-expect-error getSigners is actually defined
	const [owner, actor, witness] = await hre.ethers.getSigners()
	const argaContract = await hre.ethers.getContractFactory('Arga')
	const arga = await argaContract.connect(owner).deploy()
	return { arga, actor, witness, owner }
}

export const declarationStatus = {
	active: 0n,
	proofSubmitted: 1n,
	approved: 2n,
	rejected: 3n,
}

export const declaration: Arga.DeclarationStruct = {
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
}: Pick<Awaited<ReturnType<typeof fixture>>, 'arga' | 'actor' | 'witness'>) => {
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
	]
	return { expectedDeclaration }
}

export const submitDeclarationProof = async ({
	arga,
	actor,
	witness,
}: Pick<Awaited<ReturnType<typeof fixture>>, 'arga' | 'actor' | 'witness'>) => {
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
