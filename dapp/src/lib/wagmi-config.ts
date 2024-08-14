import assert from 'assert'
import { hardhat, optimismSepolia } from 'viem/chains'
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { createConfig as createConfigCore } from '@wagmi/core'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'
import { argaAbi } from '~/lib/generated'
import contracts from '~/lib/contracts'

export const walletConnectProjectId = '94c503a4bc0400523c25e21e615cad4d'

const metadata = {
	name: 'Arga',
	description: 'DeMo',
	url: 'https://web3modal.com', // TODO: set to domain
	icons: ['https://avatars.githubusercontent.com/u/37784886'], // TODO: set to logo
}

assert(process.env.NEXT_PUBLIC_CHAIN_NAME)

export const chainId = { optimismSepolia }[process.env.NEXT_PUBLIC_CHAIN_NAME]?.id
assert(chainId)

type ChainId = 31337 | 11155420

export const getContractAddress = <Id extends ChainId>({ chainId }: { chainId: Id }) =>
	contracts[chainId][0].contracts.Arga.address

export const argaInstance = { address: getContractAddress({ chainId }), abi: argaAbi, chainId } as const

export const wagmiConfig = createConfig({
	chains: [optimismSepolia],
	transports: {
		[hardhat.id]: http('http://127.0.0.1:8545/'),
		[optimismSepolia.id]: http(`https://optimism-sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`),
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
	chains: [optimismSepolia],
	transports: {
		[optimismSepolia.id]: http(`https://optimism-sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`),
	},
})
