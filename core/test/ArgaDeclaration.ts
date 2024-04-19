import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { Arga } from '../typechain-types/contracts/Arga'
import { declaration, makeDeclaration } from './utils'

const fixture = async () => {
	const [owner, actor, witness] = await hre.ethers.getSigners()
	const argaContract = await hre.ethers.getContractFactory('Arga')
	const arga = await argaContract.connect(owner).deploy()
	return { arga, actor, witness, owner }
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
			expect(await arga.declaration(0)).to.deep.equal(expectedDeclaration)
			expect(await arga.actorDeclarations(actor.address)).to.deep.equal([expectedDeclaration])
			expect(await arga.witnessDeclarations(witness.address)).to.deep.equal([expectedDeclaration])
		})
	})
	describe('view', () => {
		it('all declarations', () => {})
		it('all active declarations', () => {})
		it('user declarations', () => {})
		it('user active declarations', () => {})
		it('community declarations', async () => {
			const { arga, actor } = await loadFixture(fixture)
			const [, , , other] = await hre.ethers.getSigners()
			const { expectedDeclaration } = await makeDeclaration({ arga, actor: other, witness: other })
			expect(await arga.communityDeclarations(actor.address, 1)).to.deep.equal([expectedDeclaration])
		})
		it('witness compensation', () => {})
	})
})
