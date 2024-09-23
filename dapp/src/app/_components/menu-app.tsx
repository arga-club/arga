'use client'

import { AuthKitProvider, SignInButton, useSignIn} from '@farcaster/auth-kit'
import tw, { styled } from 'twin.macro'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '~/app/_components/ui/navigation-menu'
import { Prose } from '~/app/_components/ui/prose'
import { farcasterConfig } from '~/lib/farcaster-config'

const FarcasterSignIn = () => {
	const { signIn, signOut, isSuccess } = useSignIn({
		onSuccess: (res) => {
			console.log('Farcaster sign-in successful:', res)
		},
		onError: (err) => {
			console.error('Farcaster sign-in error:', err)
		},
	})

	return (
		<SignInButton
		  onSignIn={signIn}
		  onSignOut={signOut}
		>
		  {isSuccess ? 'Connected with Farcaster' : 'Sign in with Farcaster'}
		</SignInButton>
	)
}

export const MenuApp = () => {
	return (
		<AuthKitProvider config={farcasterConfig}>
		<Root>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/declarations'>
							<Prose>
								<h1 tw='mb-2 md:-mt-4 -mt-2 mr-4 text-6xl'>Arga</h1>
							</Prose>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/declarations/new'>
							New Declaration
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/redemptions'>
							Redemptions
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList>
					<NavigationMenuItem>
						<w3m-button />
					</NavigationMenuItem>
					<NavigationMenuItem>
    					<FarcasterSignIn />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</Root>
		</AuthKitProvider>
	)
}

const Root = styled.div`
	${tw`container py-4`}
	${tw`md:flex md:mt-20 max-md:mt-8 max-md:space-y-6`}
	justify-content: space-between;
	align-items: center;
`
