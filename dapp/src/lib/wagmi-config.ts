import { hardhat } from 'viem/chains'
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'

export const walletConnectProjectId = '94c503a4bc0400523c25e21e615cad4d'

const metadata = {
	name: 'Arga',
	description: 'DeMo',
	url: 'https://web3modal.com', // TODO: set to domain
	icons: ['https://avatars.githubusercontent.com/u/37784886'], // TODO: set to logo
}

export const wagmiConfig = createConfig({
	chains: [hardhat],
	transports: {
		[hardhat.id]: http(),
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
