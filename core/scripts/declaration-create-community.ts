import hre from 'hardhat'
import { declaration, value } from '../test/utils'

const createCommunityDeclaration = async () => {
	const [, , , other] = await hre.ethers.getSigners()
	const { address: argaAddress } = await hre.deployments.get('Arga')
	const arga = await hre.ethers.getContractAt('ArgaDiamond', argaAddress)
	const { hash } = await arga
		.connect(other)
		.declareWithEther(
			'declaration from script (community)',
			'description from script',
			other,
			other,
			declaration.startDate,
			declaration.endDate,
			declaration.witnessByDate,
			{ value },
		)
	console.log(hash)
}

async function main() {
	await createCommunityDeclaration()
	await createCommunityDeclaration()
	await createCommunityDeclaration()
	await createCommunityDeclaration()
	await createCommunityDeclaration()
	await createCommunityDeclaration()
	await createCommunityDeclaration()
	await createCommunityDeclaration()
	await createCommunityDeclaration()
	await createCommunityDeclaration()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
