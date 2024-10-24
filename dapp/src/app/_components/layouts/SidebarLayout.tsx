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
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
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

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = location.pathname
	const { data: session } = useSession()
	const user = session?.user
	const { isMobile } = useSidebar()
	return (
		<div tw='container py-24'>
			<div tw='md:flex md:gap-8 md:items-start'>
				<div tw='w-1/5 space-y-4'>
					<Link href='/declarations' tw='pl-7 block'>
						<Logo />
					</Link>
					<Sidebar collapsible='none' tw='pt-4 pb-14 pl-3 pr-4 rounded'>
						<SidebarContent>
							<SidebarGroup>
								<SidebarGroupLabel>Declarations</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										<SidebarMenuItem>
											<SidebarMenuButton asChild isActive={pathname === '/declarations/new'}>
												<Link tw='flex pr-4' href='/declarations/new'>
													<Zap />
													<span>Make new</span>
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton asChild isActive={pathname === '/declarations'}>
												<Link tw='flex pr-4' href='/declarations'>
													<Users />
													<span>Community</span>
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
							<SidebarGroup>
								<SidebarGroupLabel>Account</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										{!user ? (
											<>
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
											</>
										) : (
											<>
												<SidebarMenuItem>
													<SidebarMenuButton asChild isActive={pathname === '/account'}>
														<Link tw='flex pr-4' href='/account'>
															<BadgeCheck />
															Account
														</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
												<SidebarMenuItem>
													<SidebarMenuButton asChild isActive={pathname === '/wallets'}>
														<Link tw='flex pr-4' href='/wallets'>
															<Wallet />
															Wallets
														</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
												<SidebarMenuItem>
													<SidebarMenuButton asChild isActive={pathname === '/redemptions'}>
														<Link tw='flex pr-4' href='/redemptions'>
															<DollarSign />
															Redemptions
														</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
											</>
										)}
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
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
													<Avatar className='h-8 w-8 rounded-lg'>
														<AvatarImage src={user.image || '/avatardefault.png'} />
														<AvatarFallback className='rounded-lg'>{user.username}</AvatarFallback>
													</Avatar>
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
