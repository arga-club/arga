import hre from 'hardhat'
import { vars } from 'hardhat/config'
import { declaration, value } from '../test/utils'
import deployments from '../ignition/deployments/chain-31337/deployed_addresses.json'

async function main() {
	const address = vars.get('TEST_ACCOUNT_ADDRESS')
	const signer = await hre.ethers.getImpersonatedSigner(address)
	const arga = await hre.ethers.getContractAt('ArgaDiamond', deployments['Arga#Arga'])
	const { hash } = await arga
		.connect(signer)
		.declareWithEther(
			'declaration from script',
			'description from script',
			address,
			address,
			declaration.startDate,
			declaration.endDate,
			declaration.witnessByDate,
			{ value },
		)
	console.log(hash)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
