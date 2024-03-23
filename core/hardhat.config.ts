import 'hardhat-ethernal'
import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-toolbox-viem'

const config: HardhatUserConfig = {
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
		apiToken:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJlYmFzZVVzZXJJZCI6Ikd6ME5VcXdMVzhZU3R3MUI4U0U0czN1ZHNvejIiLCJhcGlLZXkiOiIyS0QxSERXLUo5QjRBUUMtR1Q4RzBQNC1XU1lBWkI2XHUwMDAxIiwiaWF0IjoxNzEwNjczNDAwfQ.XMLWQbm5Dt4SGcb2guz1-8jpZbj4pt3j_Aj-cnCOqaI',
	},
}

export default config
