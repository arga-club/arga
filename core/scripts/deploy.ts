import hre from 'hardhat'

async function main() {
	// @ts-expect-error getSigners is actually defined
	const [owner] = await hre.ethers.getSigners()
	const argaContract = await hre.ethers.getContractFactory('Arga')
	const arga = await argaContract.connect(owner).deploy()
	console.log('Arga deployed')
	console.log({ contract: arga.target, owner: owner.address })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
