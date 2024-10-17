'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Logo } from '~/app/_components/Logo'

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
	const { data: session } = useSession()
	return (
		<div tw='container'>
			<div tw='md:flex md:items-start'>
				<div tw='w-1/5 py-10 pr-4 space-y-4 flex flex-col items-end'>
					<Logo />
					<Link tw='block' href='/declarations/new'>
						New Declaration
					</Link>
					<Link tw='block' href='/redemptions'>
						Redemptions
					</Link>
					{!session?.user ? (
						<>
							<Link tw='block' href='/sign-in'>
								Log in
							</Link>
							<Link tw='block' href='/register'>
								Register
							</Link>
						</>
					) : (
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
					)}
				</div>
				<div tw='md:w-4/5 py-24 pl-4'>{children}</div>
			</div>
		</div>
	)
}
