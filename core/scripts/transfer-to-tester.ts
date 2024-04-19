import hre from 'hardhat'
import { vars } from 'hardhat/config'

async function main() {
	const address = vars.get('TEST_ACCOUNT_ADDRESS')
	const [, , , other] = await hre.ethers.getSigners()
	const { hash } = await other.sendTransaction({
		to: address,
		value: hre.ethers.parseEther('100'),
	})
	console.log(hash)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
