import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'

const fixture = async () => {
	// @ts-expect-error getSigners is actually defined
	const [owner, other, feeReceiver] = await hre.ethers.getSigners()
	const ownable = await hre.ethers.deployContract('Arga', [owner, feeReceiver])
	return { owner, other, ownable, feeReceiver }
}

describe('Ownable', function () {
	it('emits ownership transfer events during construction', async function () {
		const { owner, ownable } = await loadFixture(fixture)
		await expect(ownable.deploymentTransaction())
			.to.emit(ownable, 'OwnershipTransferred')
			.withArgs(hre.ethers.ZeroAddress, owner)
	})

	it('rejects zero address for initialOwner', async function () {
		const { ownable, feeReceiver } = await loadFixture(fixture)
		await expect(hre.ethers.deployContract('Arga', [hre.ethers.ZeroAddress, feeReceiver]))
			.to.be.revertedWithCustomError({ interface: ownable.interface }, 'OwnableInvalidOwner')
			.withArgs(hre.ethers.ZeroAddress)
	})

	it('has an owner', async function () {
		const { owner, ownable } = await loadFixture(fixture)
		expect(await ownable.owner()).to.equal(owner)
	})

	describe('transfer ownership', function () {
		it('changes owner after transfer', async function () {
			const { owner, other, ownable } = await loadFixture(fixture)
			await expect(ownable.connect(owner).transferOwnership(other))
				.to.emit(ownable, 'OwnershipTransferred')
				.withArgs(owner, other)

			expect(await ownable.owner()).to.equal(other)
		})

		it('prevents non-owners from transferring', async function () {
			const { other, ownable } = await loadFixture(fixture)
			await expect(ownable.connect(other).transferOwnership(other))
				.to.be.revertedWithCustomError(ownable, 'OwnableUnauthorizedAccount')
				.withArgs(other)
		})

		it('guards ownership against stuck state', async function () {
			const { owner, ownable } = await loadFixture(fixture)
			await expect(ownable.connect(owner).transferOwnership(hre.ethers.ZeroAddress))
				.to.be.revertedWithCustomError(ownable, 'OwnableInvalidOwner')
				.withArgs(hre.ethers.ZeroAddress)
		})
	})

	describe('renounce ownership', function () {
		it('loses ownership after renouncement', async function () {
			const { owner, ownable } = await loadFixture(fixture)
			await expect(ownable.connect(owner).renounceOwnership())
				.to.emit(ownable, 'OwnershipTransferred')
				.withArgs(owner, hre.ethers.ZeroAddress)

			expect(await ownable.owner()).to.equal(hre.ethers.ZeroAddress)
		})

		it('prevents non-owners from renouncement', async function () {
			const { other, ownable } = await loadFixture(fixture)
			await expect(ownable.connect(other).renounceOwnership())
				.to.be.revertedWithCustomError(ownable, 'OwnableUnauthorizedAccount')
				.withArgs(other)
		})

		// it('allows to recover access using the internal _transferOwnership', async function () {
		//   const { owner, other, ownable } = await loadFixture(fixture)
		//   await ownable.connect(owner).renounceOwnership();

		//   await expect(ownable.$_transferOwnership(other))
		//     .to.emit(ownable, 'OwnershipTransferred')
		//     .withArgs(hre.ethers.ZeroAddress, other);

		//   expect(await ownable.owner()).to.equal(other);
		// });
	})
})
