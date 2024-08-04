import 'hardhat-diamond-abi'
import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-ignition-viem'
import '@openzeppelin/hardhat-upgrades'
import 'hardhat-ethernal'
import 'hardhat-contract-sizer'

export default {
	solidity: {
		compilers: [
			{
				version: '0.8.22',
				settings: {
					optimizer: {
						enabled: true,
						runs: 1,
					},
				},
			},
		],
	},
	// mocha: {
	// 	timeout: ms('10m'),
	// },
	diamondAbi: {
		name: 'ArgaDiamond',
		include: ['DeclarationFacet', 'PoolFacet', 'RedemptionFacet', 'TreasuryFacet', 'OwnershipFacet'],
		filter: abiElement => !['supportsInterface', 'facetFunctionSelectors'].includes(abiElement.name),
	},
	networks: {
		hardhat: {
			forking: {
				url: 'https://opt-sepolia.g.alchemy.com/v2/SCkfInlsYCGj1mnX4rj-jdKEUxx-t92X',
				blockNumber: 15476319,
			},
			// mining: {
			// 	auto: false,
			// 	interval: 5000,
			// },
			gas: 12e6,
			gasPrice: 8e9,
			blockGasLimit: 20e6,
		},
	},
	ethernal: {
		disableSync: false,
		disableTrace: true,
		disabled: false,
		uploadAst: false,
		resetOnStart: 'hardhat',
		apiToken: vars.get('ETHERNAL_API_TOKEN'),
	},
} satisfies HardhatUserConfig
