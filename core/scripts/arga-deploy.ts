import hre from 'hardhat'

async function main() {
	const Arga = await hre.ethers.getContractFactory('ArgaBasic')

	const proxy = await hre.upgrades.deployProxy(Arga, ['0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'], {
		kind: 'uups',
	})
	await proxy.waitForDeployment()
	console.log({ proxy: await proxy.getAddress() })

	const implementation = await hre.upgrades.erc1967.getImplementationAddress(await proxy.getAddress())
	console.log({ implementation })

	await hre.ethernal.push({
		name: 'ArgaBasic',
		address: await proxy.getAddress(),
	})
}

main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
