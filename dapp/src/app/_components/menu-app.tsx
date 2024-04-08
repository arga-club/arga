'use client'

import tw, { styled } from 'twin.macro'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '~/app/_components/ui/navigation-menu'

export const MenuApp = () => {
	return (
		<Root>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/declarations'>
							Home
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/declarations/new'>
							New Declaration
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu>
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
	${tw`container py-4 border-b`}
	display: flex;
	justify-content: space-between;
	align-items: center;
`
