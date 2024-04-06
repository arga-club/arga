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

describe('Security', function () {
	describe('witness', () => {
		it('only witness can conclude declaration', async () => {
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
			await expect(arga.connect(actor).concludeDeclarationWithApproval(id))
				.to.be.revertedWithCustomError(arga, 'InvalidWitness')
				.withArgs(actor)
		})
	})
})
