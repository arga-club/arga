import 'hardhat-diamond-abi'
import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-ignition-viem'
import '@openzeppelin/hardhat-upgrades'
import 'hardhat-ethernal'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'

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
	namedAccounts: {
		owner: {
			default: 0,
			'optimism-sepolia': '0x2D9E9CCf7EaDcb8d42C85F7678d0311A0479DD50',
		},
		// https://docs.pyth.network/entropy/contract-addresses
		entropyContract: {
			default: '0x4821932D0CDd71225A6d914706A621e0389D7061',
			'optimism-sepolia': '0x4821932D0CDd71225A6d914706A621e0389D7061',
		},
		entropyProvider: {
			default: '0x6CC14824Ea2918f5De5C2f75A9Da968ad4BD6344',
			'optimism-sepolia': '0x6CC14824Ea2918f5De5C2f75A9Da968ad4BD6344',
		},
	},
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
