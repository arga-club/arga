import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { declaration, deploy, getSigners, makeDeclaration, value } from './utils'
import { ArgaLibrary } from '../typechain-types'

const fixture = async () => {
	const signers = await getSigners()
	const { arga } = await deploy()
	return { arga, ...signers }
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
					(declarationArg: ArgaLibrary.DeclarationStruct) =>
						declarationArg.id === declaration.id &&
						declarationArg.status === declaration.status &&
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
		it('declareWithEther adds declaration to list', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
			expect(await arga.getDeclaration(0)).to.deep.equal(expectedDeclaration)
			expect(await arga.actorDeclarations(actor.address)).to.deep.equal([expectedDeclaration])
			expect(await arga.witnessDeclarations(witness.address)).to.deep.equal([expectedDeclaration])
		})
		it('will not work when endDate is before startDate', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			await expect(
				arga.connect(actor).declareWithEther(
					declaration.summary,
					declaration.description,
					actor.address,
					witness.address,
					declaration.endDate, // swapped
					declaration.startDate, // swapped
					declaration.witnessByDate,
					{ value },
				),
			).to.be.revertedWith('endDate must be before startDate')
		})
		it('will not work when witnessByDate is before endDate', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			await expect(
				arga.connect(actor).declareWithEther(
					declaration.summary,
					declaration.description,
					actor.address,
					witness.address,
					declaration.startDate,
					declaration.witnessByDate, // swapped
					declaration.endDate, // swapped
					{ value },
				),
			).to.be.revertedWith('witnessByDate must be before endDate')
		})
		it('will not work when actor address is 0x0', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			await expect(
				arga
					.connect(actor)
					.declareWithEther(
						declaration.summary,
						declaration.description,
						hre.ethers.ZeroAddress,
						witness.address,
						declaration.startDate,
						declaration.endDate,
						declaration.witnessByDate,
						{ value },
					),
			)
				.to.be.revertedWithCustomError({ interface: arga.interface }, 'InvalidActor')
				.withArgs(hre.ethers.ZeroAddress)
		})
		it('will not work when witness address is 0x0', async () => {
			const { arga, actor } = await loadFixture(fixture)
			await expect(
				arga
					.connect(actor)
					.declareWithEther(
						declaration.summary,
						declaration.description,
						actor.address,
						hre.ethers.ZeroAddress,
						declaration.startDate,
						declaration.endDate,
						declaration.witnessByDate,
						{ value },
					),
			)
				.to.be.revertedWithCustomError({ interface: arga.interface }, 'InvalidWitness')
				.withArgs(hre.ethers.ZeroAddress)
		})
	})
	describe('view', () => {
		it('all declarations', () => {})
		it('all active declarations', () => {})
		it('user declarations', () => {})
		it('user active declarations', () => {})
		it('community declarations', async () => {
			const { arga, actor, other } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor: other, witness: other })
			expect(await arga.communityDeclarations(actor.address, 1)).to.deep.equal([expectedDeclaration])
		})
		it('witness compensation', () => {})
	})
})
