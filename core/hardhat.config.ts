import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-ignition-viem'
import '@openzeppelin/hardhat-upgrades'

const runningDevNode = process.env.DEV_NODE
runningDevNode && import('hardhat-ethernal')

const configDev: HardhatUserConfig = {
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
}

const config: HardhatUserConfig = {
	solidity: '0.8.22',
	networks: {
		sepolia: {
			url: `https://sepolia.infura.io/v3/${vars.get('INFURA_API_KEY')}`,
			accounts: [vars.get('SEPOLIA_PRIVATE_KEY')],
		},
	},
	etherscan: {
		apiKey: vars.get('ETHERSCAN_API_KEY'),
	},
}

export default runningDevNode ? configDev : config
