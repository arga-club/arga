import { defineConfig } from '@wagmi/cli'
import { hardhat as hardhatPlugin, react, actions } from '@wagmi/cli/plugins'
import { hardhat, sepolia } from 'viem/chains'
import { argaAddress } from '~/lib/generated'

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
					[hardhat.id]: argaAddress[hardhat.id],
					[sepolia.id]: argaAddress[sepolia.id],
				},
			},
		}),
		react(),
		actions(),
	],
})
