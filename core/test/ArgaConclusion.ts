import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { Arga } from '../typechain-types/contracts/Arga'
import {
	declaration,
	declarationStatus,
	deploy,
	gasUsedForTransaction,
	getSigners,
	makeDeclaration,
	proof,
	submitDeclarationProof,
	value,
} from './utils'

const fixture = async () => {
	const signers = await getSigners()
	const { arga } = await deploy()
	return { arga, ...signers }
}

describe('Conclusion', function () {
	describe('Proof', () => {
		it('can submit proof', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
			const id = expectedDeclaration[0]
			await expect(arga.connect(actor).submitDeclarationProof(id, proof))
				.to.emit(arga, 'DeclarationProofSubmitted')
				.withArgs(
					(declarationArg: Arga.DeclarationStruct) =>
						declarationArg.id === declaration.id &&
						declarationArg.status === declarationStatus.proofSubmitted &&
						declarationArg.summary === declaration.summary &&
						declarationArg.description === declaration.description &&
						declarationArg.actor === actor.address &&
						declarationArg.witness === witness.address &&
						declarationArg.startDate === declaration.startDate &&
						declarationArg.endDate === declaration.endDate &&
						declarationArg.witnessByDate === declaration.witnessByDate &&
						declarationArg.collateral.value === declaration.collateral.value &&
						declarationArg.collateral.erc20Address === declaration.collateral.erc20Address &&
						declarationArg.proof === proof,
				)
		})
		it('cannot submit proof after endDate', async () => {
			// test
		})
		it('only actor can submit proof', async () => {
			// test
		})
	})
	describe('Approval', () => {
		it('emits conclusion event', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
			const id = expectedDeclaration[0]
			await submitDeclarationProof({ arga, actor, witness })
			await expect(arga.connect(witness).concludeDeclarationWithApproval(id))
				.to.emit(arga, 'DeclarationConcludedWithApproval')
				.withArgs(
					(declarationArg: Arga.DeclarationStruct) =>
						declarationArg.id === declaration.id &&
						declarationArg.status === declarationStatus.approved &&
						declarationArg.summary === declaration.summary &&
						declarationArg.description === declaration.description &&
						declarationArg.actor === actor.address &&
						declarationArg.witness === witness.address &&
						declarationArg.startDate === declaration.startDate &&
						declarationArg.endDate === declaration.endDate &&
						declarationArg.witnessByDate === declaration.witnessByDate &&
						declarationArg.collateral.value === declaration.collateral.value &&
						declarationArg.collateral.erc20Address === declaration.collateral.erc20Address &&
						declarationArg.proof === proof,
				)
		})
		it('allows actor, witness, treasurer to collect compensation', async () => {
			const { arga, actor, witness, owner } = await loadFixture(fixture)
			const {
				expectedDeclaration: [id],
			} = await makeDeclaration({ arga, actor, witness })
			await arga.connect(witness).concludeDeclarationWithApproval(id)
			const actorRedemption = (value * 96n) / 100n
			const witnessRedemption = (value * 2n) / 100n
			const ownerRedemption = (value * 2n) / 100n
			expect(await arga.redemptionsForParty(actor)).to.deep.equal([[actorRedemption, hre.ethers.ZeroAddress]])
			expect(await arga.redemptionsForParty(witness)).to.deep.equal([[witnessRedemption, hre.ethers.ZeroAddress]])
			expect(await arga.redemptionsForParty(owner)).to.deep.equal([[ownerRedemption, hre.ethers.ZeroAddress]])
			expect(await arga.pool()).to.deep.equal([])
			{
				const balanceBefore = await actor.provider.getBalance(actor.address)
				const transaction = await arga.connect(actor).redeem(actor.address, [hre.ethers.ZeroAddress])
				const gasUsed = await gasUsedForTransaction(transaction)
				const balanceAfter = await actor.provider.getBalance(actor.address)
				expect(balanceAfter).to.equal(balanceBefore - gasUsed + actorRedemption)
				expect(await arga.redemptionsForParty(actor)).to.deep.equal([[0n, hre.ethers.ZeroAddress]])
				await expect(arga.connect(actor).redeem(actor.address, [hre.ethers.ZeroAddress])).to.be.revertedWith(
					'No ETH available to redeem',
				)
			}
			{
				const balanceBefore = await witness.provider.getBalance(witness.address)
				const transaction = await arga.connect(witness).redeem(witness.address, [hre.ethers.ZeroAddress])
				const gasUsed = await gasUsedForTransaction(transaction)
				const balanceAfter = await witness.provider.getBalance(witness.address)
				expect(balanceAfter).to.equal(balanceBefore - gasUsed + witnessRedemption)
				expect(await arga.redemptionsForParty(witness)).to.deep.equal([[0n, hre.ethers.ZeroAddress]])
				await expect(arga.connect(witness).redeem(witness.address, [hre.ethers.ZeroAddress])).to.be.revertedWith(
					'No ETH available to redeem',
				)
			}
			{
				const balanceBefore = await owner.provider.getBalance(owner.address)
				const transaction = await arga.connect(owner).redeem(owner.address, [hre.ethers.ZeroAddress])
				const gasUsed = await gasUsedForTransaction(transaction)
				const balanceAfter = await owner.provider.getBalance(owner.address)
				expect(balanceAfter).to.equal(balanceBefore - gasUsed + ownerRedemption)
				expect(await arga.redemptionsForParty(owner)).to.deep.equal([[0n, hre.ethers.ZeroAddress]])
				await expect(arga.connect(owner).redeem(owner.address, [hre.ethers.ZeroAddress])).to.be.revertedWith(
					'No ETH available to redeem',
				)
			}
		})
		it('groups together collaterals of same address', async () => {
			const { arga, actor, witness, owner } = await loadFixture(fixture)
			// conclude 2 declarations
			await makeDeclaration({ arga, actor, witness }).then(async ({ expectedDeclaration: [id] }) => {
				await arga.connect(witness).concludeDeclarationWithApproval(id)
			})
			await makeDeclaration({ arga, actor, witness }).then(async ({ expectedDeclaration: [id] }) => {
				await arga.connect(witness).concludeDeclarationWithApproval(id)
			})
			// expect double redemptions
			const actorRedemption = ((value * 96n) / 100n) * 2n
			const witnessRedemption = ((value * 2n) / 100n) * 2n
			const ownerRedemption = ((value * 2n) / 100n) * 2n
			expect(await arga.redemptionsForParty(actor)).to.deep.equal([[actorRedemption, hre.ethers.ZeroAddress]])
			expect(await arga.redemptionsForParty(witness)).to.deep.equal([[witnessRedemption, hre.ethers.ZeroAddress]])
			expect(await arga.redemptionsForParty(owner)).to.deep.equal([[ownerRedemption, hre.ethers.ZeroAddress]])
			{
				const balanceBefore = await actor.provider.getBalance(actor.address)
				const transaction = await arga.connect(actor).redeem(actor.address, [hre.ethers.ZeroAddress])
				const gasUsed = await gasUsedForTransaction(transaction)
				const balanceAfter = await actor.provider.getBalance(actor.address)
				expect(balanceAfter).to.equal(balanceBefore - gasUsed + actorRedemption)
			}
			{
				const balanceBefore = await witness.provider.getBalance(witness.address)
				const transaction = await arga.connect(witness).redeem(witness.address, [hre.ethers.ZeroAddress])
				const gasUsed = await gasUsedForTransaction(transaction)
				const balanceAfter = await witness.provider.getBalance(witness.address)
				expect(balanceAfter).to.equal(balanceBefore - gasUsed + witnessRedemption)
			}
			{
				const balanceBefore = await owner.provider.getBalance(owner.address)
				const transaction = await arga.connect(owner).redeem(owner.address, [hre.ethers.ZeroAddress])
				const gasUsed = await gasUsedForTransaction(transaction)
				const balanceAfter = await owner.provider.getBalance(owner.address)
				expect(balanceAfter).to.equal(balanceBefore - gasUsed + ownerRedemption)
			}
			const contractBalance = await owner.provider.getBalance(arga)
			expect(contractBalance).to.equal(0n)
		})
		it('wins pool when multiplier is high enough', async () => {
			const { arga, actor, witness, owner } = await loadFixture(fixture)
			const {
				expectedDeclaration: [id],
			} = await makeDeclaration({ arga, actor, witness })
			await submitDeclarationProof({ arga, actor, witness })
			await arga.connect(witness).concludeDeclarationWithRejection(id)
			const poolAmount = (value * 96n) / 100n
			expect(await arga.pool()).to.deep.equal([[poolAmount, hre.ethers.ZeroAddress]])
			expect(await arga.redemptionsForParty(actor)).to.deep.equal([])
			await makeDeclaration({ arga, actor, witness })
			await arga.connect(actor).submitDeclarationProof(1n, proof)
			await arga.connect(owner).changeWinMultiplier(25)
			await expect(await arga.connect(witness).concludeDeclarationWithApproval(1n))
				.to.emit(arga, 'PoolWon')
				.withArgs(
					(declarationArg: Arga.DeclarationStruct) =>
						declarationArg.id === 1n &&
						declarationArg.status === declarationStatus.approved &&
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
			const actorRedemption = (value * 96n) / 100n
			expect(await arga.redemptionsForParty(actor)).to.deep.equal([
				[poolAmount + actorRedemption, hre.ethers.ZeroAddress],
			])
			{
				const balanceBefore = await actor.provider.getBalance(actor.address)
				const transaction = await arga.connect(actor).redeem(actor.address, [hre.ethers.ZeroAddress])
				const gasUsed = await gasUsedForTransaction(transaction)
				const balanceAfter = await actor.provider.getBalance(actor.address)
				expect(balanceAfter).to.equal(balanceBefore - gasUsed + poolAmount + actorRedemption)
			}
			await arga.connect(witness).redeem(witness.address, [hre.ethers.ZeroAddress])
			await arga.connect(owner).redeem(owner.address, [hre.ethers.ZeroAddress])
			const contractBalance = await owner.provider.getBalance(arga)
			expect(contractBalance).to.equal(0n)
		})
		it('only witness can conclude', async () => {
			// test
		})
		it('cannot conclude after witnessByDate', async () => {
			// test
		})
		it('cannot conclude when no proof', async () => {
			// test
		})
		it('cannot conclude when already concluded', async () => {
			// test
		})
	})
	describe('Rejection', () => {
		it('emits conclusion event', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
			const id = expectedDeclaration[0]
			await submitDeclarationProof({ arga, actor, witness })
			await expect(arga.connect(witness).concludeDeclarationWithRejection(id))
				.to.emit(arga, 'DeclarationConcludedWithRejection')
				.withArgs(
					(declarationArg: Arga.DeclarationStruct) =>
						declarationArg.id === declaration.id &&
						declarationArg.status === declarationStatus.rejected &&
						declarationArg.summary === declaration.summary &&
						declarationArg.description === declaration.description &&
						declarationArg.actor === actor.address &&
						declarationArg.witness === witness.address &&
						declarationArg.startDate === declaration.startDate &&
						declarationArg.endDate === declaration.endDate &&
						declarationArg.witnessByDate === declaration.witnessByDate &&
						declarationArg.collateral.value === declaration.collateral.value &&
						declarationArg.collateral.erc20Address === declaration.collateral.erc20Address &&
						declarationArg.proof === proof,
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
			expect(await arga.pool()).to.deep.equal([[(value * 96n) / 100n, hre.ethers.ZeroAddress]])
		})
		it('only witness can reject', async () => {
			// test
		})
		it('cannot reject after witnessByDate', async () => {
			// test
		})
		it('cannot reject when no proof', async () => {
			// test
		})
	})
})
