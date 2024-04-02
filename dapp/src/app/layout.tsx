import { Inter } from 'next/font/google'
import { TRPCReactProvider } from '~/trpc/react'
import '~/styles/globals.css'
import StyledComponentsRegistry from '~/styles/registry'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata = {
	title: 'Arga',
	description: 'Decentralized motivation for the new era',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`font-sans ${inter.variable}`} style={{ margin: 0 }}>
				<TRPCReactProvider>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</TRPCReactProvider>
			</body>
		</html>
	)
}
