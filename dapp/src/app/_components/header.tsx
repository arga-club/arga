'use client'

import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '~/app/_components/ui/navigation-menu'
import { Prose } from '~/app/_components/ui/prose'
import { Avatar, AvatarFallback, AvatarImage } from '~/app/_components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '~/app/_components/ui/dropdown-menu'
import logo from '~/images/abstract-option-08.png'

export const Header = ({ className, hideMenu }: { className?: string; hideMenu?: boolean }) => {
	const { data: session } = useSession()
	return (
		<Root className={className}>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} tw='px-0 -ml-1' href='/declarations'>
							<Prose tw='flex space-x-4 items-center'>
								<Image src={logo} alt='flowchart showing process in detail' tw='w-16 h-16 my-0' />
								<h1 tw='mb-0 text-5xl'>Arga</h1>
							</Prose>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			{!hideMenu && (
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
					{!session?.user ? (
						<>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuLink className={navigationMenuTriggerStyle()} href='/sign-in'>
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
						<NavigationMenuList tw='ml-6'>
							<NavigationMenuItem>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<Avatar>
											<AvatarImage src='/avatardefault.png' />
											<AvatarFallback>{session.user.email?.substring(0, 2)}</AvatarFallback>
										</Avatar>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>Account</DropdownMenuItem>
										<DropdownMenuItem>Declarations Acting</DropdownMenuItem>
										<DropdownMenuItem>
											<Link href='/witnessing'>Declarations Witnessing</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<w3m-button />
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<div onClick={() => signOut()}>Log out</div>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</NavigationMenuItem>
						</NavigationMenuList>
					)}
				</NavigationMenu>
			)}
		</Root>
	)
}

const Root = styled.div`
	${tw`container py-4`}
	${tw`md:flex md:mt-20 max-md:mt-8 max-md:space-y-6`}
	justify-content: space-between;
	align-items: center;
`