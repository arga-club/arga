'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { useSession } from 'next-auth/react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FarcasterSignInButton } from '~/app/_components/FarcasterSignInButton'
import { Input } from '~/app/_components/ui/input'
import { Prose } from '~/app/_components/ui/prose'
import avatarDefault from '~/images/avatar-default.png'

export default function Home() {
	const { data: session } = useSession()
	return (
		<>
			<div tw='space-y-10'>
				<Prose>
					<h1>Account</h1>
					<div tw='flex flex-col m-0'>
						<Avatar tw='size-36 rounded-lg mb-8 bg-gray-400'>
							<AvatarImage src={session?.user.image || avatarDefault.src} tw='m-0 rounded-lg' />
							<AvatarFallback className='rounded-lg'>{session?.user.username}</AvatarFallback>
						</Avatar>
						<div tw='space-y-8'>
							<div tw='space-y-2'>
								<p tw='m-0 text-sm'>
									<strong>Email</strong>
								</p>
								<Input placeholder='no email registered' value={session?.user.email ?? ''} />
							</div>
							<Divider />
							{!session?.user.fid ? (
								<div tw='space-y-4'>
									<p tw='text-sm'>Have a Farcaster account?</p>
									<FarcasterSignInButton />
									<div tw='space-y-2'>
										<p tw='m-0 text-sm'>
											<strong>Display Name</strong>
										</p>
										<Input
											placeholder='no display name registered'
											value={session?.user.displayName ?? ''}
											readOnly
										/>
										<p tw='text-sm' />
									</div>
									<div tw='space-y-2'>
										<p tw='m-0 text-sm'>
											<strong>Username</strong>
										</p>
										<Input
											placeholder='no username registered'
											value={session?.user.username ?? ''}
											readOnly
										/>
									</div>
									<div tw='space-y-2'>
										<p tw='m-0 text-sm'>
											<strong>Farcaster ID</strong>
										</p>
										<Input placeholder='no username registered' value={session?.user.fid ?? ''} readOnly />
									</div>
								</div>
							) : (
								<div tw='space-y-4'>
									<p tw='text-sm'>These details have been pulled from your Warpcast account</p>
									<div tw='space-y-2'>
										<p tw='m-0 text-sm'>
											<strong>Display Name</strong>
										</p>
										<Input
											placeholder='no display name registered'
											value={session?.user.displayName ?? ''}
											readOnly
										/>
										<p tw='text-sm' />
									</div>
									<div tw='space-y-2'>
										<p tw='m-0 text-sm'>
											<strong>Username</strong>
										</p>
										<Input
											placeholder='no username registered'
											value={session?.user.username ?? ''}
											readOnly
										/>
									</div>
									<div tw='space-y-2'>
										<p tw='m-0 text-sm'>
											<strong>Farcaster ID</strong>
										</p>
										<Input placeholder='no username registered' value={session?.user.fid ?? ''} readOnly />
									</div>
								</div>
							)}
						</div>
					</div>
				</Prose>
			</div>
		</>
	)
}

const Divider = styled.div`
	${tw`border-t-[1px] border-gray-200 h-1`}
`
