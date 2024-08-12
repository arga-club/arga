import hre from 'hardhat'
import { vars } from 'hardhat/config'
import { declaration, value } from '../test/utils'

async function main() {
	const address = vars.get('TEST_ACCOUNT_ADDRESS')
	const signer = await hre.ethers.getImpersonatedSigner(address)
	const { address: argaAddress } = await hre.deployments.get('Arga')
	const arga = await hre.ethers.getContractAt('ArgaDiamond', argaAddress)
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
