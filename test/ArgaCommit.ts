import hre from 'hardhat'
import { expect } from 'chai'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'
import ms from 'ms'
import { Arga } from '../typechain-types/contracts/Arga'

const declaration: Arga.DeclarationStruct = {
  summary: 'successfully test Arga contract',
  description: 'this is a test description this is a test description this is a test description this is a test description this is a test description this is a test description',
  actor: hre.ethers.ZeroAddress,
  witness: hre.ethers.ZeroAddress,
  startDate: Date.now(),
  endDate: Date.now() + ms('5d'),
  witnessByDate: Date.now() + ms('10d'),
  collateralValue: 1,
  collateralErc20Address: hre.ethers.ZeroAddress,
}

const fixture = async () => {
  // @ts-expect-error getSigners is actually defined
  const [owner, actor, witness, feeReceiver] = await hre.ethers.getSigners();
  const arga = await hre.ethers.deployContract('Arga', [owner]);
  return { arga, actor, witness, owner, feeReceiver };
}

describe('Declaration', function () {
  describe('fee receiver', () => {
    it('sets feeReceiver on deploy', async () => {

    })
    it('rejects zero address for feeReceiver', async () => {
      const { arga, feeReceiver } = await loadFixture(fixture)
      await expect(hre.ethers.deployContract('Arga', [hre.ethers.ZeroAddress, feeReceiver]))
        .to.be.revertedWithCustomError({ interface: arga.interface }, 'OwnableInvalidOwner')
        .withArgs(hre.ethers.ZeroAddress);
    });
  })
  describe('declare', () => {
    it.skip('emits declaration event', async () => {
      const { arga, actor, witness } = await loadFixture(fixture)
      await expect(arga.connect(actor).declareWithEther(declaration.summary, declaration.description, witness.address, declaration.startDate, declaration.endDate, declaration.witnessByDate))
        .to.emit(arga, 'DeclarationMade')
    })
    it('adds declaration to list', () => {

    })
  })
  describe('witness', () => {
    it('emits conclusion event', () => {
      
    })
    it('allows witness to collect compensation', () => {

    })
  })
  describe('view', () => {
    it('all declarations', () => {

    })
    it('all active declarations', () => {

    })
    it('user declarations', () => {

    })
    it('user active declarations', () => {

    })
    it('witness compensation', () => {

    })
  })
});
