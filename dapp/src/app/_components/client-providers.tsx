'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type State, WagmiProvider } from 'wagmi'
import { SessionProvider } from 'next-auth/react'
import { type Session } from 'next-auth'
import { AuthKitProvider } from '@farcaster/auth-kit'
import { wagmiConfig } from '~/lib/wagmi-config'
import { farcasterConfig } from '~/lib/farcaster'

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
			<AuthKitProvider config={farcasterConfig}>
				<WagmiProvider config={wagmiConfig} initialState={initialState}>
					<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
				</WagmiProvider>
			</AuthKitProvider>
		</SessionProvider>
	)
}
