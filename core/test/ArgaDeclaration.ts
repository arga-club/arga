import hre, { deployments } from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { declaration, getSigners, makeDeclaration, value, withoutDrawId } from './utils'
import { ArgaLibrary } from '../typechain-types'

const fixture = async () => {
	await deployments.fixture()
	const argaDeployment = await deployments.get('Arga')
	const arga = await hre.ethers.getContractAt('ArgaDiamond', argaDeployment.address)
	const signers = await getSigners()
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
			const firstDeclaration = await arga.getDeclaration(0)
			expect(withoutDrawId(firstDeclaration)).to.deep.equal(expectedDeclaration)
			const actorDeclarations = await arga.actorDeclarations(actor.address)
			expect(actorDeclarations.map(withoutDrawId)).to.deep.equal([expectedDeclaration])
			const witnessDeclarations = await arga.witnessDeclarations(witness.address)
			expect(witnessDeclarations.map(withoutDrawId)).to.deep.equal([expectedDeclaration])
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
			).to.be.revertedWith('endDate must be after startDate')
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
			).to.be.revertedWith('witnessByDate must be after endDate')
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
		it('all declarations', async () => {
			const { arga, actor, other } = await loadFixture(fixture)
			await makeDeclaration({ arga, actor, witness: other })
			await makeDeclaration({ arga, actor, witness: other })
			await makeDeclaration({ arga, actor, witness: other })
			await makeDeclaration({ arga, actor, witness: other })
			expect(await arga.allDeclarations(0n, 4n)).to.have.length(4)
			expect(await arga.allDeclarations(0n, 10n)).to.have.length(4)
			expect(await arga.allDeclarations(0n, 2n)).to.have.length(2)
			expect(await arga.allDeclarations(1n, 2n)).to.have.length(2)
			expect(await arga.allDeclarations(2n, 2n)).to.have.length(0)
			expect(await arga.allDeclarations(3n, 2n)).to.have.length(0)
			expect(await arga.allDeclarations(1n, 3n)).to.have.length(1)
		})
		it('all active declarations', () => {})
		it('user declarations', () => {})
		it('user active declarations', () => {})
		it('community declarations', async () => {
			const { arga, actor, other } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor: other, witness: other })
			const communityDeclarations = await arga.communityDeclarations(actor.address, 1)
			expect(communityDeclarations.map(withoutDrawId)).to.deep.equal([expectedDeclaration])
		})
		it('witness compensation', () => {})
	})
})
