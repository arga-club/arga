import assert from 'assert'
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { cookieStorage, createStorage, http } from 'wagmi'
import { createConfig as createConfigCore } from '@wagmi/core'
import { hardhat, optimism, optimismSepolia } from '@reown/appkit/networks'

assert(process.env.NEXT_PUBLIC_URL)
assert(process.env.NEXT_PUBLIC_CHAIN_NAME)

export const chain = { hardhat, optimismSepolia, optimism }[process.env.NEXT_PUBLIC_CHAIN_NAME]
assert(chain)
export const chainId = chain.id
assert(chainId)

const projectId = '94c503a4bc0400523c25e21e615cad4d'
const transports = {
	[hardhat.id]: http('http://127.0.0.1:8545/'),
	[optimismSepolia.id]: http(`https://optimism-sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`),
	[optimism.id]: http(`https://optimism-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`),
}
const wagmiAdapter = new WagmiAdapter({
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
	networks: [chain],
	projectId,
	transports,
})

createAppKit({
	adapters: [wagmiAdapter],
	networks: [chain],
	metadata: {
		name: 'Arga',
		description: 'Declare your way to the future you want',
		url: process.env.NEXT_PUBLIC_URL,
		icons: [`${process.env.NEXT_PUBLIC_URL}/favicon-128x128.png`],
	},
	projectId,
	features: {
		email: false,
		socials: false,
	},
})

export const wagmiConfig = wagmiAdapter.wagmiConfig

export const wagmiCoreConfig = createConfigCore({
	chains: [chain],
	transports,
})
