import { defineConfig } from '@wagmi/cli'
import { hardhat as hardhatPlugin, react, actions } from '@wagmi/cli/plugins'
import { optimismSepolia } from 'viem/chains'
import { getContractAddress } from '~/lib/config-utils'

export default defineConfig({
	out: 'src/lib/generated.ts',
	plugins: [
		hardhatPlugin({
			project: '../core',
			commands: {
				clean: 'pnpm hardhat clean',
				build: 'pnpm hardhat compile',
				rebuild: 'pnpm hardhat compile',
			},
			deployments: {
				Arga: {
					[optimismSepolia.id]: getContractAddress({ chainId: optimismSepolia.id }),
				},
			},
		}),
		react(),
		actions(),
	],
})
