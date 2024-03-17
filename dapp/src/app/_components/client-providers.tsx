'use client'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type State, WagmiProvider } from 'wagmi'
import { wagmiConfig, walletConnectProjectId } from '~/lib/wagmi-config'

createWeb3Modal({
	wagmiConfig,
	projectId: walletConnectProjectId,
})

const queryClient = new QueryClient()

export const ClientProviders = ({ children, initialState }: { children: React.ReactNode; initialState?: State }) => {
	return (
		<WagmiProvider config={wagmiConfig} initialState={initialState}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</WagmiProvider>
	)
}
