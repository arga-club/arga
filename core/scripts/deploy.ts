import hre from 'hardhat'

async function main() {
	// @ts-expect-error getSigners is actually defined
	const [owner, treasurer] = await hre.ethers.getSigners()
	const arga = await hre.viem.deployContract('Arga', [owner.address, treasurer.address])
	console.log('Arga deployed')
	console.log({ contract: arga.address, owner: owner.address, treasurer: treasurer.address })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
