'use client'

import styled from 'styled-components'
import tw from 'twin.macro'
import { FarcasterSignInButton } from '~/app/_components/FarcasterSignInButton'
import { PictureBackground } from '~/app/_components/PictureBackground'
import { Input } from '~/app/_components/ui/input'
import { Prose } from '~/app/_components/ui/prose'
import avatarDefault from '~/images/avatar-default.png'
import { trpc } from '~/trpc/react'

export default function Home() {
	const { data: user } = trpc.user.getCurrent.useQuery()

	return (
		<Prose>
			<h1>Account</h1>
			{!user ? (
				'Loading...'
			) : (
				<div tw='flex flex-col m-0'>
					<PictureBackground
						$backgroundImageSrc={user.image || avatarDefault.src}
						tw='size-36 rounded-lg mb-8 bg-gray-400'
					/>
					<div tw='space-y-8'>
						<div tw='space-y-2'>
							<p tw='m-0 text-sm'>
								<strong>Email</strong>
							</p>
							<Input placeholder='no email registered' value={user.email ?? ''} />
						</div>
						<Divider />
						{!user.fid ? (
							<div tw='space-y-4'>
								<p tw='text-sm'>Have a Farcaster account?</p>
								<FarcasterSignInButton alreadySignedIn />
								<div tw='space-y-2'>
									<p tw='m-0 text-sm'>
										<strong>Display Name</strong>
									</p>
									<Input placeholder='no display name registered' value={user.displayName ?? ''} readOnly />
									<p tw='text-sm' />
								</div>
								<div tw='space-y-2'>
									<p tw='m-0 text-sm'>
										<strong>Username</strong>
									</p>
									<Input placeholder='no username registered' value={user.username ?? ''} readOnly />
								</div>
								<div tw='space-y-2'>
									<p tw='m-0 text-sm'>
										<strong>Farcaster ID</strong>
									</p>
									<Input placeholder='no username registered' value={user.fid ?? ''} readOnly />
								</div>
							</div>
						) : (
							<div tw='space-y-4'>
								<p tw='text-sm'>These details have been pulled from your Farcaster account</p>
								<div tw='space-y-2'>
									<p tw='m-0 text-sm'>
										<strong>Display Name</strong>
									</p>
									<Input placeholder='no display name registered' value={user.displayName ?? ''} readOnly />
									<p tw='text-sm' />
								</div>
								<div tw='space-y-2'>
									<p tw='m-0 text-sm'>
										<strong>Username</strong>
									</p>
									<Input placeholder='no username registered' value={user.username ?? ''} readOnly />
								</div>
								<div tw='space-y-2'>
									<p tw='m-0 text-sm'>
										<strong>Farcaster ID</strong>
									</p>
									<Input placeholder='no username registered' value={user.fid ?? ''} readOnly />
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</Prose>
	)
}

const Divider = styled.div`
	${tw`border-t-[1px] border-gray-200 h-1`}
`
