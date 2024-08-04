import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { declaration, deploy, getSigners, makeDeclaration, randomNumberForDraw, submitDeclarationProof } from './utils'
import { ArgaLibrary } from '../typechain-types'

const fixture = async () => {
	const signers = await getSigners()
	const { arga } = await deploy()
	return { arga, ...signers }
}

describe('Security', function () {
	describe('witness', () => {
		it('only witness can conclude declaration', async () => {
			const { arga, actor, witness } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
			await submitDeclarationProof({ arga, actor, witness })
			const id = expectedDeclaration[0]
			await expect(arga.connect(witness).concludeDeclarationWithApproval(id, randomNumberForDraw()))
				.to.emit(arga, 'DeclarationStatusChange')
				.withArgs(
					(declarationArg: ArgaLibrary.DeclarationStruct) =>
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
			await expect(arga.connect(actor).concludeDeclarationWithApproval(id, randomNumberForDraw()))
				.to.be.revertedWithCustomError(arga, 'InvalidWitness')
				.withArgs(actor)
		})
	})
})
