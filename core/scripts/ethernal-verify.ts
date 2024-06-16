import hre from 'hardhat'
import addresses from '../ignition/deployments/chain-31337/deployed_addresses.json'

async function main() {
	const argaAddress = addresses['Arga#Arga']
	await hre.ethernal.push({
		name: 'Arga',
		address: argaAddress,
	})
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
