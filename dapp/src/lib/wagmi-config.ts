import { http, createConfig } from 'wagmi'
import { hardhat } from 'wagmi/chains'

export const wagmiConfig = createConfig({
	chains: [hardhat],
	transports: {
		[hardhat.id]: http(),
	},
})

declare module 'wagmi' {
	interface Register {
		config: typeof wagmiConfig
	}
}
