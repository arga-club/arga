import hre from 'hardhat'
import { vars } from 'hardhat/config'

async function main() {
	const Arga = await hre.ethers.getContractFactory('Arga')

	const proxy = await hre.upgrades.upgradeProxy(vars.get('ARGA_PROXY_ADDRESS'), Arga, {
		kind: 'uups',
	})
	await proxy.waitForDeployment()
	console.log({ proxy: await proxy.getAddress() })

	const implementation = await hre.upgrades.erc1967.getImplementationAddress(await proxy.getAddress())
	console.log({ implementation })

	await hre.ethernal.push({
		name: 'Arga',
		address: await proxy.getAddress(),
	})
}

main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
