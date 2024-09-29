import { Inter } from 'next/font/google'
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'
import { TRPCReactProvider } from '~/trpc/react'
import '~/styles/globals.css'
import StyledComponentsRegistry from '~/styles/registry'
import { wagmiConfig } from '~/lib/wagmi-config'
import { DeclarationWatcher } from '~/app/_components/declaration-watcher'
import { MenuApp } from '~/app/_components/menu-app'
import { Providers } from '~/app/_components/Providers'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata = {
	title: 'Arga',
	description: 'Declare',
	icons: [
		{ rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
		{ rel: 'icon', type: 'image/png', sizes: '48x48', url: '/favicon-48x48.png' },
		{ rel: 'icon', type: 'image/png', sizes: '64x64', url: '/favicon-64x64.png' },
		{ rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon-180x180.png' },
		{ rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon-192x192.png' },
		{ rel: 'icon', type: 'image/png', sizes: '128x128', url: '/favicon-128x128.png' },
		{ rel: 'icon', type: 'image/png', sizes: '152x152', url: '/favicon-152x152.png' },
		{ rel: 'icon', type: 'image/png', sizes: '167x167', url: '/favicon-167x167.png' },
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))

	return (
		<html lang='en'>
			<body className={`font-sans ${inter.variable}`} style={{ margin: 0 }}>
				<TRPCReactProvider>
					<StyledComponentsRegistry>
						<Providers initialState={initialState}>
							<MenuApp />
							<DeclarationWatcher>{children}</DeclarationWatcher>
						</Providers>
					</StyledComponentsRegistry>
				</TRPCReactProvider>
			</body>
		</html>
	)
}

// add tw.macro
