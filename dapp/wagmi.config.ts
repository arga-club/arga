import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'

export default defineConfig({
	out: 'src/lib/generated.ts',
	contracts: [],
	plugins: [
		hardhat({
			project: '../core',
			commands: {
				clean: 'pnpm hardhat clean',
				build: 'pnpm hardhat compile',
				rebuild: 'pnpm hardhat compile',
			},
			deployments: {
				Arga: {
					31337: '0x5fbdb2315678afecb367f032d93f642f64180aa3', // hardhat node
				},
			},
		}),
	],
})
