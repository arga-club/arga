import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-ignition-viem'
import '@openzeppelin/hardhat-upgrades'
import 'hardhat-ethernal'

export default {
	solidity: '0.8.22',
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
		disableTrace: false,
		disabled: false,
		uploadAst: true,
		resetOnStart: 'hardhat',
		apiToken: vars.get('ETHERNAL_API_TOKEN'),
	},
} satisfies HardhatUserConfig
