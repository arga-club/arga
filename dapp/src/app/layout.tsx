import { Inter } from 'next/font/google'
import { TRPCReactProvider } from '~/trpc/react'
import '~/styles/globals.css'
import { ClientProviders } from '~/app/_components/client-providers'
import { Menu } from '~/app/_components/menu'
import StyledComponentsRegistry from '~/styles/registry'

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
	return (
		<html lang='en' style={{ background: '#3457D5' }}>
			<body className={`font-sans ${inter.variable}`} style={{ margin: 0 }}>
				<TRPCReactProvider>
					<StyledComponentsRegistry>
						<ClientProviders>
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
