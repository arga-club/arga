import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { Arga } from '../typechain-types/contracts/Arga'
import { declaration, makeDeclaration, value } from './utils'

const fixture = async () => {
	// @ts-expect-error getSigners is actually defined
	const [owner, actor, witness] = await hre.ethers.getSigners()
	const argaContract = await hre.ethers.getContractFactory('Arga')
	const arga = await argaContract.connect(owner).deploy()
	return { arga, actor, witness, owner }
}

describe('Conclusion', function () {
	describe('Approval', () => {
		it('emits conclusion event', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
			const id = expectedDeclaration[0]
			await expect(arga.connect(witness).concludeDeclarationWithApproval(id))
				.to.emit(arga, 'DeclarationConcludedWithApproval')
				.withArgs(
					(declarationArg: Arga.DeclarationStruct) =>
						declarationArg.id === declaration.id &&
						declarationArg.status === 1n && // approved
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
		it('allows actor, witness, treasurer to collect compensation', async () => {
			const { arga, actor, witness, owner } = await loadFixture(fixture)
			const {
				expectedDeclaration: [id],
			} = await makeDeclaration({ arga, actor, witness })
			await arga.connect(witness).concludeDeclarationWithApproval(id)
			expect(await arga.redemptionsForParty(actor)).to.deep.equal([[(value * 96n) / 100n, hre.ethers.ZeroAddress]])
			expect(await arga.redemptionsForParty(witness)).to.deep.equal([[(value * 2n) / 100n, hre.ethers.ZeroAddress]])
			expect(await arga.redemptionsForParty(owner)).to.deep.equal([[(value * 2n) / 100n, hre.ethers.ZeroAddress]])
			expect(await arga.poolCollateral()).to.deep.equal([])
		})
	})
	describe('Rejection', () => {
		it('emits conclusion event', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
			const id = expectedDeclaration[0]
			await expect(arga.connect(witness).concludeDeclarationWithRejection(id))
				.to.emit(arga, 'DeclarationConcludedWithRejection')
				.withArgs(
					(declarationArg: Arga.DeclarationStruct) =>
						declarationArg.id === declaration.id &&
						declarationArg.status === 2n && // rejected
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
		it('allows actor, witness, treasurer to collect compensation', async () => {
			const { arga, actor, witness, owner } = await loadFixture(fixture)
			const {
				expectedDeclaration: [id],
			} = await makeDeclaration({ arga, actor, witness })
			await arga.connect(witness).concludeDeclarationWithRejection(id)
			expect(await arga.redemptionsForParty(actor)).to.deep.equal([])
			expect(await arga.redemptionsForParty(witness)).to.deep.equal([[(value * 2n) / 100n, hre.ethers.ZeroAddress]])
			expect(await arga.redemptionsForParty(owner)).to.deep.equal([[(value * 2n) / 100n, hre.ethers.ZeroAddress]])
			expect(await arga.poolCollateral()).to.deep.equal([[(value * 96n) / 100n, hre.ethers.ZeroAddress]])
		})
	})
})
