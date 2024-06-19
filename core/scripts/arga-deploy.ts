import hre from 'hardhat'
import fs from 'fs-extra'
import 'zx/globals'
$.verbose = true

async function main() {
	if (hre.hardhatArguments.network === 'localhost') {
		$`rm -rf ignition/deployments/chain-31337`
	}
	const Arga = await hre.ethers.getContractFactory('Arga')

	console.log('deploying proxy...')
	const proxy = await hre.upgrades.deployProxy(Arga, ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'], {
		kind: 'uups',
	})
	await proxy.waitForDeployment()
	const proxyAddress = await proxy.getAddress()
	console.log({ proxyAddress })

	const implementationAddress = await hre.upgrades.erc1967.getImplementationAddress(await proxy.getAddress())
	console.log({ implementationAddress })

	console.log('pushing to ethernal...')
	await hre.ethernal.push({
		name: 'Arga',
		address: proxyAddress,
	})

	console.log('deploying to ignition...')
	await fs.outputJson('ignition/parameters.json', { Arga: { proxyAddress } })
	await $`hardhat \
	--config ${hre.hardhatArguments.config} \
	--network ${hre.hardhatArguments.network} \
	ignition deploy ignition/modules/Arga.ts \
	--parameters ignition/parameters.json`
	$`rm ignition/parameters.json`
}

main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
