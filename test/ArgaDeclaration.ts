import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import ms from 'ms'
import { Arga } from '../typechain-types/contracts/Arga'

const declaration: Arga.DeclarationStruct = {
	summary: 'successfully test Arga contract',
	description:
		'this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description',
	actor: hre.ethers.ZeroAddress,
	witness: hre.ethers.ZeroAddress,
	startDate: BigInt(Date.now()),
	endDate: BigInt(Date.now() + ms('5d')),
	witnessByDate: BigInt(Date.now() + ms('10d')),
	collateralValue: 1,
	collateralErc20Address: hre.ethers.ZeroAddress,
}

const fixture = async () => {
	// @ts-expect-error getSigners is actually defined
	const [owner, actor, witness, treasurer] = await hre.ethers.getSigners()
	const arga = await hre.ethers.deployContract('Arga', [owner, treasurer])
	return { arga, actor, witness, owner, treasurer }
}

describe('Declaration', function () {
	describe('declare', () => {
		it('declareWithEther emits declaration event', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			const value = hre.ethers.parseEther('1')
			await expect(
				arga
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
					),
			)
				.to.emit(arga, 'DeclarationMade')
				.withArgs(
					(declarationArg: Arga.DeclarationStruct) =>
						declarationArg.summary === declaration.summary &&
						declarationArg.description === declaration.description &&
						declarationArg.actor === actor.address &&
						declarationArg.witness === witness.address &&
						declarationArg.startDate === declaration.startDate &&
						declarationArg.endDate === declaration.endDate &&
						declarationArg.witnessByDate === declaration.witnessByDate &&
						declarationArg.collateralValue === value &&
						declarationArg.collateralErc20Address === hre.ethers.ZeroAddress,
				)
		})
		it('adds declaration to list', () => {})
	})
	describe('witness', () => {
		it('emits conclusion event', () => {})
		it('allows witness to collect compensation', () => {})
	})
	describe('view', () => {
		it('all declarations', () => {})
		it('all active declarations', () => {})
		it('user declarations', () => {})
		it('user active declarations', () => {})
		it('witness compensation', () => {})
	})
})
