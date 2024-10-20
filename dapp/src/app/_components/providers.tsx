import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { ClientProviders } from '~/app/_components/client-providers'
import { wagmiConfig } from '~/lib/wagmi-config'
import { getServerAuthSession } from '~/server/auth'
import StyledComponentsRegistry from '~/styles/registry'
import { TRPCReactProvider } from '~/trpc/react'

export const Providers = async ({ children }: { children: React.ReactNode }) => {
	const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))
	const session = await getServerAuthSession()
	return (
		<TRPCReactProvider>
			<StyledComponentsRegistry>
				<ClientProviders initialState={initialState} session={session}>
					{children}
				</ClientProviders>
			</StyledComponentsRegistry>
		</TRPCReactProvider>
	)
}
