'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import tw from 'twin.macro'
import { z } from 'zod'
import { FarcasterSignInButton } from '~/app/_components/FarcasterSignInButton'
import { InputWithElement } from '~/app/_components/InputWithElement'
import { PictureBackground } from '~/app/_components/PictureBackground'
import { Button } from '~/app/_components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '~/app/_components/ui/dialog'
import { FormField, FormItem, FormDescription, FormControl, FormMessage, Form } from '~/app/_components/ui/form'
import { Input } from '~/app/_components/ui/input'
import { Prose } from '~/app/_components/ui/prose'
import avatarDefault from '~/images/avatar-default.png'
import { trpc } from '~/trpc/react'

const changeEmailSchema = z.object({
	email: z.string().email(),
})

export default function Home() {
	const { data: user } = trpc.user.getCurrent.useQuery()

	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const changeEmailMutation = trpc.user.changeEmail.useMutation()
	const utils = trpc.useUtils()
	const labelForm = useForm<z.infer<typeof changeEmailSchema>>({
		defaultValues: async () => {
			const data = await utils.user.getCurrent.fetch()
			return {
				email: data?.email ?? ''
			}
		},
		resolver: zodResolver(changeEmailSchema),
	})
	const submitProof = labelForm.handleSubmit(async ({ email }) => {
		await changeEmailMutation.mutateAsync({ email })
		await utils.user.invalidate()
		setIsDialogOpen(false)
	})

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
							<InputWithElement>
								<Input placeholder='no email registered' value={user.email ?? ''} readOnly />
								<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
									<DialogTrigger asChild>
										<Button tw='cursor-pointer'>
											Edit email
										</Button>
									</DialogTrigger>
									<DialogContent>
										<Form {...labelForm}>
											<form onSubmit={submitProof} tw='space-y-4'>
												<Prose>
													<h3 tw='m-0'>Wallet email:</h3>
												</Prose>
												<FormField
													control={labelForm.control}
													name='email'
													render={({ field }) => (
														<FormItem>
															<FormDescription>
																Enter your new email address
															</FormDescription>
															<FormControl>
																<Input placeholder='riches@patricians.ro' {...field} autoFocus />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<Button type='submit'>Update →</Button>
											</form>
										</Form>
									</DialogContent>
								</Dialog>
							</InputWithElement>
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
