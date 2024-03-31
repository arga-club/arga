import assert from 'assert'
import { hardhat, sepolia } from 'viem/chains'
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { createConfig as createConfigCore } from '@wagmi/core'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'
import { argaAbi, argaAddress } from '~/lib/generated'

export const walletConnectProjectId = '94c503a4bc0400523c25e21e615cad4d'

const metadata = {
	name: 'Arga',
	description: 'DeMo',
	url: 'https://web3modal.com', // TODO: set to domain
	icons: ['https://avatars.githubusercontent.com/u/37784886'], // TODO: set to logo
}

assert(process.env.NEXT_PUBLIC_CHAIN_NAME)

export const chainId = {
	hardhat,
	sepolia,
}[process.env.NEXT_PUBLIC_CHAIN_NAME]?.id
assert(chainId)

export const argaInstance = { address: argaAddress[chainId], abi: argaAbi, chainId } as const

export const wagmiConfig = createConfig({
	chains: [hardhat, sepolia],
	transports: {
		[hardhat.id]: http('http://127.0.0.1:8545/'),
		[sepolia.id]: http(`https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`),
	},
	connectors: [
		walletConnect({ projectId: walletConnectProjectId, metadata, showQrModal: false }),
		injected({ shimDisconnect: true }),
		coinbaseWallet({
			appName: metadata.name,
			appLogoUrl: metadata.icons[0],
		}),
	],
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
})

export const wagmiCoreConfig = createConfigCore({
	chains: [hardhat, sepolia],
	transports: {
		[hardhat.id]: http('http://127.0.0.1:8545/'),
		[sepolia.id]: http(`https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`),
	},
})
