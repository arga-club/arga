import { defineConfig } from '@wagmi/cli'
import { hardhat as hardhatPlugin } from '@wagmi/cli/plugins'
import { hardhat, sepolia } from 'viem/chains'

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
					[hardhat.id]: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
					[sepolia.id]: '0x0325c0e405793BF97583F00e42fb7230fD74845B',
				},
			},
		}),
	],
})
