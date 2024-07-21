import hre from 'hardhat'
import 'zx/globals'
import { deploy } from '../test/utils'
$.verbose = true

async function main() {
	if (hre.hardhatArguments.network === 'localhost') {
		$`rm -rf ignition/deployments/chain-31337`
	}
	const owner = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
	console.log({ owner })

	console.log('deploying init...')
	const { arga } = await deploy({ owner })
	const address = await arga.getAddress()

	console.log('pushing to ethernal...')
	await hre.ethernal.push({
		name: 'ArgaDiamond',
		address,
	})

	console.log('deploying to ignition...')
	await fs.outputJson('ignition/parameters.json', { Arga: { address } })
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
