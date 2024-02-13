import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import ms from 'ms'
import { Arga } from '../typechain-types/contracts/Arga'

const declaration: Arga.DeclarationStruct = {
	id: 0n,
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
}

const fixture = async () => {
	// @ts-expect-error getSigners is actually defined
	const [owner, actor, witness, treasurer] = await hre.ethers.getSigners()
	const arga = await hre.ethers.deployContract('Arga', [owner, treasurer])
	return { arga, actor, witness, owner, treasurer }
}

const value = hre.ethers.parseEther('1')
const makeDeclaration = async ({
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
		0,
		declaration.summary,
		declaration.description,
		actor.address,
		witness.address,
		declaration.startDate,
		declaration.endDate,
		declaration.witnessByDate,
		[value, hre.ethers.ZeroAddress],
	]
	return { expectedDeclaration }
}

describe('Conclusion', function () {
	it('emits conclusion event', async () => {
		const { arga, actor, witness } = await loadFixture(fixture)
		const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
		const id = expectedDeclaration[0]
		await expect(arga.connect(witness).concludeDeclarationWithApproval(id))
			.to.emit(arga, 'DeclarationConcludedWithApproval')
			.withArgs(
				(declarationArg: Arga.DeclarationStruct) =>
					declarationArg.id === declaration.id &&
					declarationArg.summary === declaration.summary &&
					declarationArg.description === declaration.description &&
					declarationArg.actor === actor.address &&
					declarationArg.witness === witness.address &&
					declarationArg.startDate === declaration.startDate &&
					declarationArg.endDate === declaration.endDate &&
					declarationArg.witnessByDate === declaration.witnessByDate &&
					declarationArg.collateral.value === declaration.collateral.value &&
					declarationArg.collateral.erc20Address === declaration.collateral.erc20Address,
			)
	})
	it('allows actor to collect compensation', async () => {
		const { arga, actor, witness } = await loadFixture(fixture)
		const {
			expectedDeclaration: [id],
		} = await makeDeclaration({ arga, actor, witness })
		await arga.connect(witness).concludeDeclarationWithApproval(id)
		expect(await arga.redemptions(actor)).to.deep.equal([[value, hre.ethers.ZeroAddress]])
	})
	it('allows witness to collect compensation', async () => {
		const { arga, actor, witness } = await loadFixture(fixture)
		const {
			expectedDeclaration: [id],
		} = await makeDeclaration({ arga, actor, witness })
		await arga.connect(witness).concludeDeclarationWithApproval(id)
		expect(await arga.redemptions(witness)).to.deep.equal([[value, hre.ethers.ZeroAddress]])
	})
})
