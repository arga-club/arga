import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'

async function fixture() {
  // @ts-expect-error getSigners is actually defined
  const [owner, other] = await hre.ethers.getSigners();
  const ownable = await hre.ethers.deployContract('Arga', [owner]);
  return { owner, other, ownable };
}

describe('Ownable', function () {
  beforeEach(async function () {
    Object.assign(this, await loadFixture(fixture));
  });

  it('emits ownership transfer events during construction', async function () {
    await expect(this.ownable.deploymentTransaction())
      .to.emit(this.ownable, 'OwnershipTransferred')
      .withArgs(hre.ethers.ZeroAddress, this.owner);
  });

  it('rejects zero address for initialOwner', async function () {
    await expect(hre.ethers.deployContract('Arga', [hre.ethers.ZeroAddress]))
      .to.be.revertedWithCustomError({ interface: this.ownable.interface }, 'OwnableInvalidOwner')
      .withArgs(hre.ethers.ZeroAddress);
  });

  it('has an owner', async function () {
    expect(await this.ownable.owner()).to.equal(this.owner);
  });

  describe('transfer ownership', function () {
    it('changes owner after transfer', async function () {
      await expect(this.ownable.connect(this.owner).transferOwnership(this.other))
        .to.emit(this.ownable, 'OwnershipTransferred')
        .withArgs(this.owner, this.other);

      expect(await this.ownable.owner()).to.equal(this.other);
    });

    it('prevents non-owners from transferring', async function () {
      await expect(this.ownable.connect(this.other).transferOwnership(this.other))
        .to.be.revertedWithCustomError(this.ownable, 'OwnableUnauthorizedAccount')
        .withArgs(this.other);
    });

    it('guards ownership against stuck state', async function () {
      await expect(this.ownable.connect(this.owner).transferOwnership(hre.ethers.ZeroAddress))
        .to.be.revertedWithCustomError(this.ownable, 'OwnableInvalidOwner')
        .withArgs(hre.ethers.ZeroAddress);
    });
  });

  describe('renounce ownership', function () {
    it('loses ownership after renouncement', async function () {
      await expect(this.ownable.connect(this.owner).renounceOwnership())
        .to.emit(this.ownable, 'OwnershipTransferred')
        .withArgs(this.owner, hre.ethers.ZeroAddress);

      expect(await this.ownable.owner()).to.equal(hre.ethers.ZeroAddress);
    });

    it('prevents non-owners from renouncement', async function () {
      await expect(this.ownable.connect(this.other).renounceOwnership())
        .to.be.revertedWithCustomError(this.ownable, 'OwnableUnauthorizedAccount')
        .withArgs(this.other);
    });

    // it('allows to recover access using the internal _transferOwnership', async function () {
    //   await this.ownable.connect(this.owner).renounceOwnership();

    //   await expect(this.ownable.$_transferOwnership(this.other))
    //     .to.emit(this.ownable, 'OwnershipTransferred')
    //     .withArgs(hre.ethers.ZeroAddress, this.other);

    //   expect(await this.ownable.owner()).to.equal(this.other);
    // });
  });
});
