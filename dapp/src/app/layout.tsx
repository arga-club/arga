import { Inter } from 'next/font/google'
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'
import { TRPCReactProvider } from '~/trpc/react'
import '~/styles/globals.css'
import { ClientProviders } from '~/app/_components/client-providers'
import { Menu } from '~/app/_components/menu'
import StyledComponentsRegistry from '~/styles/registry'
import { wagmiConfig } from '~/lib/wagmi-config'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata = {
	title: 'Arga',
	description: 'Declare',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))

	return (
		<html lang='en'>
			<body className={`font-sans ${inter.variable}`} style={{ margin: 0 }}>
				<TRPCReactProvider>
					<StyledComponentsRegistry>
						<ClientProviders initialState={initialState}>
							<Menu />
							{children}
						</ClientProviders>
					</StyledComponentsRegistry>
				</TRPCReactProvider>
			</body>
		</html>
	)
}

// add tw.macro
