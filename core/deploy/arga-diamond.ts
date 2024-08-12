import { BaseContract, FunctionFragment } from 'ethers'
import { DeployFunction } from 'hardhat-deploy/types'
import sleep from 'await-sleep'

const FacetCutAction = { Add: 0, Replace: 1, Remove: 2 }

function getSelectors(contract: BaseContract) {
	const selectors = Object.values(contract.interface.fragments)
		.filter((fragment): fragment is FunctionFragment => fragment.type === 'function')
		.filter(fragment => fragment.format() !== 'init(bytes)')
		.map(fragment => fragment.selector)
	return selectors
}

export default (async function ({ ethers, ethernal, artifacts, getNamedAccounts, deployments: { deploy, log } }) {
	log('deploying Arga diamond contract')
	const { owner, entropyContract } = await getNamedAccounts()
	const diamondCutFacet = await deploy('DiamondCutFacet', { from: owner })
	const arga = await deploy('Arga', { from: owner, args: [owner, diamondCutFacet.address] })

	log('deploying facets')
	const facetNames = [
		'DiamondLoupeFacet',
		'OwnershipFacet',
		'DeclarationFacet',
		'PoolFacet',
		'RedemptionFacet',
		'TreasuryFacet',
	] as const
	const facetCutArgs = [] as { facetAddress: string; action: number; functionSelectors: string[] }[]
	for (const facetName of facetNames) {
		const facet = await deploy(facetName, { from: owner })
		const Contract = await ethers.getContractAt(facetName, facet.address)
		facetCutArgs.push({
			facetAddress: facet.address,
			action: FacetCutAction.Add,
			functionSelectors: getSelectors(Contract),
		})
	}

	log('registering facets')
	const diamondInit = await deploy('DiamondInit', { from: owner })
	const DiamondInit = await ethers.getContractAt('DiamondInit', diamondInit.address)
	const DiamondCut = await ethers.getContractAt('IDiamondCut', arga.address)
	const initFunctionCall = DiamondInit.interface.encodeFunctionData('init', [owner, entropyContract])
	const diamondCutTransaction = await DiamondCut.diamondCut(facetCutArgs, diamondInit.address, initFunctionCall)
	const diamondCutReceipt = await diamondCutTransaction.wait()
	if (!diamondCutReceipt?.status) {
		throw Error(`Diamond upgrade failed: ${diamondCutTransaction.hash}`)
	}

	sleep(10e3).then(async () => {
		log('pushing to ethernal...')
		const artifact = await artifacts.readArtifact('ArgaDiamond')
		ethernal.push({
			name: 'Arga',
			address: arga.address,
			abi: artifact.abi,
		})
	})
} satisfies DeployFunction)
