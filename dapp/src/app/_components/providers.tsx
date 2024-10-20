import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { ClientProviders } from '~/app/_components/client-providers'
import { SidebarProvider } from '~/app/_components/ui/sidebar'
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
				<SidebarProvider>
					<ClientProviders initialState={initialState} session={session}>
						{children}
					</ClientProviders>
				</SidebarProvider>
			</StyledComponentsRegistry>
		</TRPCReactProvider>
	)
}
