import 'hardhat-diamond-abi'
import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-ignition-viem'
import '@openzeppelin/hardhat-upgrades'
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
	namedAccounts: {
		owner: {
			default: 0,
			optimismSepolia: '0x2D9E9CCf7EaDcb8d42C85F7678d0311A0479DD50',
			optimism: '0x97C860be7A003938a916e8633dD3E8d45Bcd0028',
		},
		// https://docs.pyth.network/entropy/contract-addresses
		entropyContract: {
			default: '0x4821932D0CDd71225A6d914706A621e0389D7061',
			optimismSepolia: '0x4821932D0CDd71225A6d914706A621e0389D7061',
			optimism: '0xdF21D137Aadc95588205586636710ca2890538d5',
		},
		entropyProvider: {
			default: '0x6CC14824Ea2918f5De5C2f75A9Da968ad4BD6344',
			optimismSepolia: '0x6CC14824Ea2918f5De5C2f75A9Da968ad4BD6344',
			optimism: '0x52DeaA1c84233F7bb8C8A45baeDE41091c616506',
		},
	},
	diamondAbi: {
		name: 'ArgaDiamond',
		include: ['DeclarationFacet', 'PoolFacet', 'RedemptionFacet', 'TreasuryFacet', 'OwnershipFacet'],
		filter: abiElement => !['supportsInterface', 'facetFunctionSelectors'].includes(abiElement.name),
	},
	networks: {
		sepolia: {
			url: `https://sepolia.infura.io/v3/${vars.get('INFURA_API_KEY')}`,
			accounts: [vars.get('SEPOLIA_PRIVATE_KEY')],
		},
		optimismSepolia: {
			url: `https://optimism-sepolia.infura.io/v3/${vars.get('INFURA_API_KEY')}`,
			accounts: [vars.get('SEPOLIA_PRIVATE_KEY')],
			verify: {
				etherscan: {
					apiKey: vars.get('ETHERSCAN_API_KEY'),
					apiUrl: 'https://optimism-sepolia.blockscout.com/api',
				},
			},
		},
		optimism: {
			url: `https://optimism-mainnet.infura.io/v3/${vars.get('INFURA_API_KEY')}`,
			accounts: [vars.get('OPTIMISM_PRIVATE_KEY')],
			verify: {
				etherscan: {
					apiKey: vars.get('OPTIMISM_ETHERSCAN_API_KEY'),
					apiUrl: 'https://api-optimistic.etherscan.io',
				},
			},
		},
	},
} satisfies HardhatUserConfig
