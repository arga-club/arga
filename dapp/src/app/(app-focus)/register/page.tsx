'use client'

import { getCsrfToken, useSession, signIn, signOut } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Prose } from '~/app/_components/ui/prose'
import { Button } from '~/app/_components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/app/_components/ui/form'
import { Input } from '~/app/_components/ui/input'
import '@farcaster/auth-kit/styles.css'
import { SignInButton, type StatusAPIResponse } from '@farcaster/auth-kit'
import { useCallback, useState } from 'react'

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(2).max(40),
})

export default function LogInPage() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') ?? '/declarations'

	const form = useForm<z.infer<typeof formSchema>>({
		mode: 'onSubmit',
		resolver: zodResolver(formSchema),
	})

	const submit = form.handleSubmit(async values => {
		await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		await signIn('credentials', {
			redirect: true,
			email: values.email,
			password: values.password,
			callbackUrl,
		})
	})

	const [error, setError] = useState(false)

	const getNonce = useCallback(async () => {
		const nonce = await getCsrfToken()
		if (!nonce) throw new Error('Unable to generate nonce')
		return nonce
	}, [])

	const handleSuccess = useCallback(async (res: StatusAPIResponse) => {
		await signIn('farcaster-credentials', {
			message: res.message,
			signature: res.signature,
			name: res.username,
			pfp: res.pfpUrl,
			redirect: false,
		})
	}, [])

   const { data: session } = useSession();
	console.log(session);

	return (
		<>
			<div tw='container'>
				<div tw='pt-16 pb-20 space-y-10'>
					<Prose>
						<h1>Register</h1>
					</Prose>
					<Form {...form}>
						<form onSubmit={submit} tw='space-y-10'>
							<div tw='space-y-4 w-96 max-w-full '>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email Address</FormLabel>
											<FormControl>
												<Input placeholder='riches@patricians.ro' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input type='password' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<Button type='submit'>Register →</Button>
							<div>
								<Prose>
									<p>Already have an account?</p>
									<Link tw='block' href='/sign-in'>
										<Button variant='outline'>Sign In</Button>
									</Link>
								</Prose>
							</div>
						</form>
					</Form>
					<div>
						<SignInButton
							nonce={getNonce}
							onSuccess={handleSuccess}
							onError={() => setError(true)}
							onSignOut={() => signOut()}
						/>
						{error && <div>Unable to sign in at this time.</div>}
					</div>
				</div>
			</div>
		</>
	)
}
