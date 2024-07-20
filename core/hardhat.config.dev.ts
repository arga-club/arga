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
	networks: {
		hardhat: {
			mining: {
				auto: false,
				interval: 5000,
			},
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
