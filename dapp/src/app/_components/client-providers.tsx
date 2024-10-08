'use client'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type State, WagmiProvider } from 'wagmi'
import { SessionProvider } from 'next-auth/react'
import { type Session } from 'next-auth'
import { wagmiConfig, walletConnectProjectId } from '~/lib/wagmi-config'

createWeb3Modal({
	wagmiConfig,
	projectId: walletConnectProjectId,
})

const queryClient = new QueryClient()

export const ClientProviders = ({
	children,
	initialState,
	session,
}: {
	children: React.ReactNode
	initialState?: State
	session: Session | null
}) => {
	return (
		<SessionProvider session={session}>
			<WagmiProvider config={wagmiConfig} initialState={initialState}>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</WagmiProvider>
		</SessionProvider>
	)
}
