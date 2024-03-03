import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { cookies } from 'next/headers'
import { TRPCReactProvider } from '~/trpc/react'
import StyledComponentsRegistry from '~/styles/registry'
import '~/styles/theme-config.css'
import { ClientProviders } from '~/app/_components/client-providers'
import { Menu } from '~/app/_components/menu'

export const metadata = {
	title: 'Create T3 App',
	description: 'Generated by create-t3-app',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' style={{ background: '#3457D5' }}>
			<body style={{ margin: 0 }}>
				<TRPCReactProvider cookies={cookies().toString()}>
					<Theme>
						<StyledComponentsRegistry>
							<ClientProviders>
								<Menu />
								{children}
							</ClientProviders>
						</StyledComponentsRegistry>
					</Theme>
				</TRPCReactProvider>
			</body>
		</html>
	)
}
