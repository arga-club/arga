import { Inter } from 'next/font/google'
import { TRPCReactProvider } from '~/trpc/react'
import '~/styles/globals.css'
import StyledComponentsRegistry from '~/styles/registry'
import { MenuTop } from '~/app/_components/menu-top'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
})

export const metadata = {
	title: 'Arga',
	description: 'Decentralized motivation for the new era',
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
	return (
		<html lang='en'>
			<body className={`font-sans ${inter.variable}`} style={{ margin: 0 }}>
				<TRPCReactProvider>
					<StyledComponentsRegistry>
						<MenuTop />
						{children}
					</StyledComponentsRegistry>
				</TRPCReactProvider>
			</body>
		</html>
	)
}
