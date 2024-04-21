import hre, { upgrades } from 'hardhat'

describe.only('Deploy', function () {
	it('deploys', async function () {
		const argaContract = await hre.ethers.getContractFactory('Arga')
		await upgrades.deployProxy(argaContract, { kind: 'uups' })
	})
})
