'use client'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type State, WagmiProvider } from 'wagmi'
import { wagmiConfig, walletConnectProjectId } from '~/lib/wagmi-config'
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';

createWeb3Modal({
	wagmiConfig,
	projectId: walletConnectProjectId,
})

const queryClient = new QueryClient()
const networks = {
	devnet: { url: getFullnodeUrl('devnet') },
	testnet: { url: getFullnodeUrl('testnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
};

export const ClientProviders = ({ children, initialState }: { children: React.ReactNode; initialState?: State }) => {
	return (
		<SuiClientProvider networks={networks} defaultNetwork="testnet">
			<WalletProvider>
				<WagmiProvider config={wagmiConfig} initialState={initialState}>
					<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
				</WagmiProvider>
			</WalletProvider>
		</SuiClientProvider>
	)
}
