import assert from 'assert'
import { hardhat, optimismSepolia, optimism } from 'viem/chains'
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { createConfig as createConfigCore } from '@wagmi/core'
import { coinbaseWallet, walletConnect } from 'wagmi/connectors'
import contracts from '~/lib/contracts'
import { getContractAddress } from '~/lib/config-utils'

export const walletConnectProjectId = '94c503a4bc0400523c25e21e615cad4d'

const metadata = {
	name: 'Arga',
	description: 'DeMo',
	url: 'https://web3modal.com', // TODO: set to domain
	icons: ['https://avatars.githubusercontent.com/u/37784886'], // TODO: set to logo
}

assert(process.env.NEXT_PUBLIC_CHAIN_NAME)

export const chainId = { hardhat, optimismSepolia, optimism }[process.env.NEXT_PUBLIC_CHAIN_NAME]?.id
assert(chainId)

export const argaInstance = {
	address: getContractAddress({ chainId }),
	abi: contracts[chainId][0].contracts.Arga.abi,
	chainId,
} as const

const chain = [hardhat, optimismSepolia, optimism].find(chain => chain.id === chainId)
assert(chain)

const commonConfig = {
	chains: [chain],
	transports: {
		[hardhat.id]: http('http://127.0.0.1:8545/'),
		[optimismSepolia.id]: http(`https://optimism-sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`),
		[optimism.id]: http(`https://optimism-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`),
	},
} as const

export const wagmiConfig = createConfig({
	...commonConfig,
	connectors: [
		walletConnect({ projectId: walletConnectProjectId, metadata, showQrModal: false }),
		coinbaseWallet({ appName: metadata.name, appLogoUrl: metadata.icons[0] }),
	],
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
})

export const wagmiCoreConfig = createConfigCore(commonConfig)
