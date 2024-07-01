import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { DeclarationStruct } from '../typechain-types/contracts/Arga'
import { declaration, deploy, getSigners, makeDeclaration } from './utils'

const fixture = async () => {
	const signers = await getSigners()
	const { arga, argaDeclaration } = await deploy()
	return { arga, argaDeclaration, ...signers }
}

describe('Security', function () {
	describe('witness', () => {
		it('only witness can conclude declaration', async () => {
			const { arga, argaDeclaration, actor, witness } = await loadFixture(fixture)
			const { expectedDeclaration } = await makeDeclaration({ arga, actor, witness })
			const id = expectedDeclaration[0]
			await expect(arga.connect(witness).concludeDeclarationWithApproval(id))
				.to.emit(argaDeclaration, 'DeclarationStatusChange')
				.withArgs(
					(declarationArg: DeclarationStruct) =>
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
			await expect(arga.connect(actor).concludeDeclarationWithApproval(id))
				.to.be.revertedWithCustomError(arga, 'InvalidWitness')
				.withArgs(actor)
		})
	})
})
