'use client'

import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Prose } from '~/app/_components/ui/prose'
import { Button } from '~/app/_components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/app/_components/ui/form'
import { Input } from '~/app/_components/ui/input'
import '@farcaster/auth-kit/styles.css'
import { FarcasterSignInButton } from '~/app/_components/FarcasterSignInButton'
import { trpc } from '~/trpc/react'

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(2).max(40),
})

export default function LogInPage() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') ?? '/declarations'
	const router = useRouter()

	const form = useForm<z.infer<typeof formSchema>>({
		mode: 'onSubmit',
		resolver: zodResolver(formSchema),
	})

	const addUser = trpc.user.add.useMutation()

	const submit = form.handleSubmit(async values => {
		await addUser.mutateAsync(values)
		await signIn('credentials', {
			redirect: false,
			email: values.email,
			password: values.password,
		})
		router.push(callbackUrl)
	})

	return (
		<>
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
					<div tw='flex space-x-2'>
						<Button onClick={submit}>Register with email →</Button>
						<FarcasterSignInButton />
					</div>
				</form>
			</Form>
			<Prose>
				<p>Already have an account?</p>
				<Link href='/sign-in'>
					<Button variant='outline'>Sign In</Button>
				</Link>
			</Prose>
		</>
	)
}
