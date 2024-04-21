import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import { deploy, getSigners } from './utils'

const fixture = async () => {
	const signers = await getSigners()
	const { arga } = await deploy()
	return { arga, ...signers }
}

describe('Ownable', function () {
	it('emits ownership transfer events during construction', async function () {
		const { owner, arga } = await loadFixture(fixture)
		await expect(arga.deploymentTransaction())
			.to.emit(arga, 'OwnershipTransferred')
			.withArgs(hre.ethers.ZeroAddress, owner)
	})

	it('has an owner', async function () {
		const { owner, arga } = await loadFixture(fixture)
		expect(await arga.owner()).to.equal(owner)
	})

	describe('transfer ownership', function () {
		it('changes owner after transfer', async function () {
			const { owner, other, arga } = await loadFixture(fixture)
			await expect(arga.connect(owner).transferOwnership(other))
				.to.emit(arga, 'OwnershipTransferred')
				.withArgs(owner, other)

			expect(await arga.owner()).to.equal(other)
		})

		it('prevents non-owners from transferring', async function () {
			const { other, arga } = await loadFixture(fixture)
			await expect(arga.connect(other).transferOwnership(other))
				.to.be.revertedWithCustomError(arga, 'OwnableUnauthorizedAccount')
				.withArgs(other)
		})

		it('guards ownership against stuck state', async function () {
			const { arga, owner } = await loadFixture(fixture)
			await expect(arga.connect(owner).transferOwnership(hre.ethers.ZeroAddress))
				.to.be.revertedWithCustomError(arga, 'OwnableInvalidOwner')
				.withArgs(hre.ethers.ZeroAddress)
		})
	})

	describe('renounce ownership', function () {
		it('loses ownership after renouncement', async function () {
			const { owner, arga } = await loadFixture(fixture)
			await expect(arga.connect(owner).renounceOwnership())
				.to.emit(arga, 'OwnershipTransferred')
				.withArgs(owner, hre.ethers.ZeroAddress)

			expect(await arga.owner()).to.equal(hre.ethers.ZeroAddress)
		})

		it('prevents non-owners from renouncement', async function () {
			const { other, arga } = await loadFixture(fixture)
			await expect(arga.connect(other).renounceOwnership())
				.to.be.revertedWithCustomError(arga, 'OwnableUnauthorizedAccount')
				.withArgs(other)
		})

		// it('allows to recover access using the internal _transferOwnership', async function () {
		//   const { owner, other, arga } = await loadFixture(fixture)
		//   await arga.connect(owner).renounceOwnership();

		//   await expect(arga.$_transferOwnership(other))
		//     .to.emit(arga, 'OwnershipTransferred')
		//     .withArgs(hre.ethers.ZeroAddress, other);

		//   expect(await arga.owner()).to.equal(other);
		// });
	})
})
