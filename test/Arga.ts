import hre from "hardhat";
import { expect } from 'chai';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { abi } from '../artifacts/contracts/Arga.sol/Arga.json'
import * as viem from 'viem'

async function fixture() {
  const [owner, other] = await hre.viem.getWalletClients();
  const ownable = await hre.viem.deployContract("Arga", [owner.account.address]);
  return { owner, other, ownable };
}

describe('Arga', function () {
  // beforeEach(async function () {
  //   Object.assign(this, await loadFixture(fixture));
  // });

  it('emits ownership transfer events during construction', async function () {
    const client = await hre.viem.getPublicClient()
    const { ownable, owner } = await loadFixture(fixture);
    const contractEvent = new Promise<any>((resolve) => {
      const unwatch = client.watchContractEvent({
        abi: ownable.abi,
        eventName: 'OwnershipTransferred',
        onLogs: (logs) => {
          unwatch()
          resolve(logs)
        }
      })
    })
    const [loggedEvent] = await contractEvent
    expect(loggedEvent.eventName).to.equal('OwnershipTransferred')
    expect(loggedEvent.address).to.equal(ownable.address)
    expect(loggedEvent.args.previousOwner).to.equal(viem.zeroAddress)
    expect(loggedEvent.args.newOwner.toLowerCase()).to.equal(owner.account.address)
  });

  it('rejects zero address for initialOwner', async function () {
    const { ownable } = await loadFixture(fixture);
    const factory = await hre.ethers.getContractFactory('Arga')
    await expect(hre.viem.deployContract("Arga", [viem.zeroAddress])).to.be.revertedWithCustomError(
      factory,
      'OwnableInvalidOwner',
    )

    // await expect(ethers.deployContract('$Ownable', [ethers.ZeroAddress]))
    //   .to.be.revertedWithCustomError({ interface: this.ownable.interface }, 'OwnableInvalidOwner')
    //   .withArgs(ethers.ZeroAddress);
  });

  // it('has an owner', async function () {
  //   expect(await this.ownable.owner()).to.equal(this.owner);
  // });

  // describe('transfer ownership', function () {
  //   it('changes owner after transfer', async function () {
  //     await expect(this.ownable.connect(this.owner).transferOwnership(this.other))
  //       .to.emit(this.ownable, 'OwnershipTransferred')
  //       .withArgs(this.owner, this.other);

  //     expect(await this.ownable.owner()).to.equal(this.other);
  //   });

  //   it('prevents non-owners from transferring', async function () {
  //     await expect(this.ownable.connect(this.other).transferOwnership(this.other))
  //       .to.be.revertedWithCustomError(this.ownable, 'OwnableUnauthorizedAccount')
  //       .withArgs(this.other);
  //   });

  //   it('guards ownership against stuck state', async function () {
  //     await expect(this.ownable.connect(this.owner).transferOwnership(ethers.ZeroAddress))
  //       .to.be.revertedWithCustomError(this.ownable, 'OwnableInvalidOwner')
  //       .withArgs(ethers.ZeroAddress);
  //   });
  // });

  // describe('renounce ownership', function () {
  //   it('loses ownership after renouncement', async function () {
  //     await expect(this.ownable.connect(this.owner).renounceOwnership())
  //       .to.emit(this.ownable, 'OwnershipTransferred')
  //       .withArgs(this.owner, ethers.ZeroAddress);

  //     expect(await this.ownable.owner()).to.equal(ethers.ZeroAddress);
  //   });

  //   it('prevents non-owners from renouncement', async function () {
  //     await expect(this.ownable.connect(this.other).renounceOwnership())
  //       .to.be.revertedWithCustomError(this.ownable, 'OwnableUnauthorizedAccount')
  //       .withArgs(this.other);
  //   });

  //   it('allows to recover access using the internal _transferOwnership', async function () {
  //     await this.ownable.connect(this.owner).renounceOwnership();

  //     await expect(this.ownable.$_transferOwnership(this.other))
  //       .to.emit(this.ownable, 'OwnershipTransferred')
  //       .withArgs(ethers.ZeroAddress, this.other);

  //     expect(await this.ownable.owner()).to.equal(this.other);
  //   });
  // });
});
