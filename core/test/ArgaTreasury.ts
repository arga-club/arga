import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { deploy, getSigners } from './utils'

const fixture = async () => {
	const signers = await getSigners()
	const { arga } = await deploy()
	return { arga, ...signers }
}

describe('Treasury', function () {
	describe('treasurer', () => {
		it('sets treasurer on deploy', async () => {
			const { arga, owner } = await loadFixture(fixture)
			expect(await arga.treasurer()).to.equal(owner)
			await expect(arga.deploymentTransaction()).to.emit(arga, 'TreasurerChanged')
		})
		it('owner can change treasurer', async () => {
			const { arga, owner, other } = await loadFixture(fixture)
			await expect(arga.connect(owner).changeTreasurer(other)).to.emit(arga, 'TreasurerChanged')
			expect(await arga.treasurer()).to.equal(other)
		})
		it('rejects zero address for treasurer', async () => {
			const { arga, owner } = await loadFixture(fixture)
			await expect(arga.connect(owner).changeTreasurer(hre.ethers.ZeroAddress)).to.be.revertedWith('Invalid address')
		})
		it("other user can't change treasurer", async () => {
			const { arga, other, owner } = await loadFixture(fixture)
			await expect(arga.connect(other).changeTreasurer(other)).to.be.revertedWithCustomError(
				{ interface: arga.interface },
				'OwnableUnauthorizedAccount',
			)
			expect(await arga.treasurer()).to.equal(owner)
		})
	})
})
