import { HardhatUserConfig, vars } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-ignition-viem'
import '@openzeppelin/hardhat-upgrades'
import 'hardhat-contract-sizer'

export default {
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
} satisfies HardhatUserConfig
