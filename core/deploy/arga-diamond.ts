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
	const shouldLog = true
	const diamondCutFacet = await deploy('DiamondCutFacet', { from: owner, log: shouldLog })
	const argaDiamondArtifact = await artifacts.readArtifact('ArgaDiamond')
	const argaArtifact = await artifacts.readArtifact('Arga')
	const arga = await deploy('Arga', {
		contract: {
			abi: [
				...argaArtifact.abi.filter(abiItem => !('name' in abiItem) || abiItem.name !== 'OwnershipTransferred'),
				...argaDiamondArtifact.abi,
			],
			bytecode: argaArtifact.bytecode,
		},
		from: owner,
		log: shouldLog,
		args: [owner, diamondCutFacet.address],
	})

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
		const facet = await deploy(facetName, { from: owner, log: shouldLog })
		if (!arga.newlyDeployed && !facet.newlyDeployed) continue
		const Contract = await ethers.getContractAt(facetName, facet.address)
		facetCutArgs.push({
			facetAddress: facet.address,
			action: FacetCutAction.Add,
			functionSelectors: getSelectors(Contract),
		})
	}

	const diamondInit = await deploy('DiamondInit', { from: owner, log: shouldLog })
	if (arga.newlyDeployed) {
		log('registering facets and initializing')
		const DiamondInit = await ethers.getContractAt('DiamondInit', diamondInit.address)
		const DiamondCut = await ethers.getContractAt('IDiamondCut', arga.address)
		const initFunctionCall = DiamondInit.interface.encodeFunctionData('init', [owner, entropyContract])
		const diamondCutTransaction = await DiamondCut.diamondCut(facetCutArgs, diamondInit.address, initFunctionCall)
		const diamondCutReceipt = await diamondCutTransaction.wait()
		if (!diamondCutReceipt?.status) {
			throw Error(`Diamond upgrade failed: ${diamondCutTransaction.hash}`)
		}
	}

	sleep(10e3).then(async () => {
		log('pushing to ethernal...')
		ethernal.push({
			name: 'Arga',
			address: arga.address,
			abi: argaDiamondArtifact.abi,
		})
	})
} satisfies DeployFunction)