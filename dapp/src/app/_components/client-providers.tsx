'use client'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig, walletConnectProjectId } from '~/lib/wagmi-config'

createWeb3Modal({
	wagmiConfig,
	projectId: walletConnectProjectId,
})

const queryClient = new QueryClient()

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</WagmiProvider>
	)
}
