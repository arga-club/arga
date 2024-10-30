'use client'

import {
	Eye,
	Sword,
	LogIn,
	UserPlus,
	Zap,
	ChevronsUpDown,
	LogOut,
	Users,
	DollarSign,
	BadgeCheck,
	Wallet,
	Bell,
} from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '~/app/_components/Logo'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarFooter,
	useSidebar,
} from '~/app/_components/ui/sidebar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '~/app/_components/ui/dropdown-menu'
import avatarDefaultSmall from '~/images/avatar-default-small.png'
import { useCurrentUser } from '~/hooks/useCurrentUser'
import { PictureBackground } from '~/app/_components/PictureBackground'

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	const { isMobile } = useSidebar()
	const { user } = useCurrentUser()
	return (
		<div tw='container py-24'>
			<div tw='md:flex md:gap-8 md:items-start'>
				<div tw='w-1/5 space-y-4'>
					<Link href='/declarations' tw='pl-7 block'>
						<Logo />
					</Link>
					<Sidebar collapsible='none' tw='py-4 pl-3 pr-4 rounded'>
						<SidebarContent>
							<SidebarGroup>
								<SidebarGroupLabel>Declarations</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										<SidebarMenuItem>
											<SidebarMenuButton asChild isActive={pathname === '/declarations'}>
												<Link tw='flex pr-4' href='/declarations'>
													<Users />
													<span>My Feed</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton asChild isActive={pathname === '/acting'}>
												<Link tw='flex pr-4' href='/acting'>
													<Sword />
													Acting
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton asChild isActive={pathname === '/witnessing'}>
												<Link tw='flex pr-4' href='/witnessing'>
													<Eye />
													Witnessing
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton asChild isActive={pathname === '/declarations/new'}>
												<Link tw='flex pr-4' href='/declarations/new'>
													<Zap />
													<span>Make new</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton asChild isActive={pathname === '/notifications'}>
												<Link tw='flex pr-4' href='/notifications'>
													<Bell />
													Notifications
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
							{!user && (
								<SidebarGroup>
									<SidebarGroupContent>
										<SidebarMenu>
											<SidebarMenuItem>
												<SidebarMenuButton asChild>
													<Link tw='flex pr-4' href='/sign-in'>
														<LogIn />
														Sign in
													</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
											<SidebarMenuItem>
												<SidebarMenuButton asChild>
													<Link tw='flex pr-4' href='/register'>
														<UserPlus />
														Register
													</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
										</SidebarMenu>
									</SidebarGroupContent>
								</SidebarGroup>
							)}
						</SidebarContent>
						{user && (
							<SidebarFooter>
								<SidebarMenu>
									<SidebarMenuItem>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<SidebarMenuButton
													size='lg'
													className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
												>
													<PictureBackground
														$backgroundImageSrc={user.image || avatarDefaultSmall.src}
														tw='h-8 w-8 rounded'
													/>
													<div className='grid flex-1 text-left text-sm leading-tight'>
														<span className='truncate font-semibold'>
															{user.displayName || user.email}
														</span>
														{user.username && <span className='truncate text-xs'>{user.username}</span>}
													</div>
													<ChevronsUpDown className='ml-auto size-4' />
												</SidebarMenuButton>
											</DropdownMenuTrigger>
											<DropdownMenuContent
												className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
												side={isMobile ? 'bottom' : 'right'}
												align='end'
												sideOffset={4}
											>
												<DropdownMenuItem asChild>
													<Link tw='flex pr-4 cursor-pointer' href='/account'>
														<BadgeCheck />
														Account
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem asChild>
													<Link tw='flex pr-4 cursor-pointer' href='/wallets'>
														<Wallet />
														Linked Wallets
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem asChild>
													<Link tw='flex pr-4 cursor-pointer' href='/redemptions'>
														<DollarSign />
														Redemptions
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem tw='cursor-pointer' onClick={() => signOut()}>
													<LogOut />
													Log out
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarFooter>
						)}
					</Sidebar>
				</div>
				<div tw='md:w-4/5'>
					<div tw='pt-2'>{children}</div>
				</div>
			</div>
		</div>
	)
}
