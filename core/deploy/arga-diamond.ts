import { BaseContract, FunctionFragment } from 'ethers'
import { DeployFunction } from 'hardhat-deploy/types'
import sleep from 'await-sleep'
import { fire } from '@jgjp/fire'

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

	type ExistingFacetSelector = {
		address: string
		selector: string
	}
	const facetSelectors: ExistingFacetSelector[] = await fire(async () => {
		const ArgaDiamond = await ethers.getContractAt('DiamondLoupeFacet', arga.address)
		const facets = await ArgaDiamond.facets()
		return facets.map(([address, selectors]) => selectors.map(selector => ({ address, selector }))).flat()
	}).catch(() => [])

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
		const selectors = getSelectors(Contract)
		// add new selectors
		const selectorsToAdd = selectors.filter(selector => facetSelectors.every(fs => fs.selector !== selector))
		if (selectorsToAdd.length) {
			facetCutArgs.push({
				facetAddress: facet.address,
				action: FacetCutAction.Add,
				functionSelectors: selectorsToAdd,
			})
		}
		// update already existing selectors
		const selectorsToUpdate = selectors.filter(selector =>
			facetSelectors.find(fs => fs.selector === selector && fs.address !== facet.address),
		)
		if (selectorsToUpdate.length) {
			facetCutArgs.push({
				facetAddress: facet.address,
				action: FacetCutAction.Replace,
				functionSelectors: selectorsToUpdate,
			})
		}
	}

	const diamondInit = await deploy('DiamondInit', { from: owner, log: shouldLog })
	if (facetCutArgs.length) {
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
