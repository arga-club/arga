import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-ignition-viem'

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
		rskMainnet: {
			url: 'https://public-node.rsk.co',
			chainId: 30,
			gasPrice: 60000000,
			accounts: [vars.get('SEPOLIA_PRIVATE_KEY')],
		},
		rskTestnet: {
			url: 'https://public-node.testnet.rsk.co',
			// url: 'https://rpc.testnet.rootstock.io/Q9VA8c9yD3JbdYZSh6WfFh5KT6t1k5-T',
			chainId: 31,
			gasPrice: 60000000,
			accounts: [vars.get('SEPOLIA_PRIVATE_KEY')],
		},
	},
	etherscan: {
		apiKey: vars.get('ETHERSCAN_API_KEY'),
	},
}

export default runningDevNode ? configDev : config
