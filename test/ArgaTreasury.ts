import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'

const fixture = async () => {
	// @ts-expect-error getSigners is actually defined
	const [owner, actor, witness, treasurer, other] = await hre.ethers.getSigners()
	const arga = await hre.ethers.deployContract('Arga', [owner, treasurer])
	return { arga, actor, witness, owner, treasurer, other }
}

describe('Treasury', function () {
	describe('treasurer', () => {
		it('sets treasurer on deploy', async () => {
			const { arga, treasurer } = await loadFixture(fixture)
			expect(await arga.treasurer()).to.equal(treasurer)
			await expect(arga.deploymentTransaction()).to.emit(arga, 'TreasurerChanged')
		})
		it('rejects zero address for treasurer', async () => {
			const { owner } = await loadFixture(fixture)
			await expect(hre.ethers.deployContract('Arga', [owner.address, hre.ethers.ZeroAddress])).to.be.revertedWith(
				'Invalid address',
			)
		})
		it('owner can change treasurer', async () => {
			const { arga, owner, other } = await loadFixture(fixture)
			await expect(arga.connect(owner).changeTreasurer(other)).to.emit(arga, 'TreasurerChanged')
			expect(await arga.treasurer()).to.equal(other)
		})
		it("other user can't change treasurer", async () => {
			const { arga, other, treasurer } = await loadFixture(fixture)
			await expect(arga.connect(other).changeTreasurer(other)).to.be.revertedWithCustomError(
				{ interface: arga.interface },
				'OwnableUnauthorizedAccount',
			)
			expect(await arga.treasurer()).to.equal(treasurer)
		})
	})
})
