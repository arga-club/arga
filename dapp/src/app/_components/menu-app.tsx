'use client'

import tw, { styled } from 'twin.macro'
import { useSession } from 'next-auth/react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '~/app/_components/ui/navigation-menu'
import { Prose } from '~/app/_components/ui/prose'

export const MenuApp = () => {
	const { data: session } = useSession()
	return (
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
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/witnessing'>
							Witnessing
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
				{!session?.user ? (
					<>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/login'>
									Log in
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/register'>
									Register
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</>
				) : (
					<NavigationMenuList>
						<NavigationMenuItem>Authed</NavigationMenuItem>
					</NavigationMenuList>
				)}
				<NavigationMenuList>
					<NavigationMenuItem>
						<w3m-button />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</Root>
	)
}

const Root = styled.div`
	${tw`container py-4`}
	${tw`md:flex md:mt-20 max-md:mt-8 max-md:space-y-6`}
	justify-content: space-between;
	align-items: center;
`
