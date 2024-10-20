'use client'

import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Prose } from '~/app/_components/ui/prose'
import { Button } from '~/app/_components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/app/_components/ui/form'
import { Input } from '~/app/_components/ui/input'

const formSchema = z.object({
	preferredName: z.string().min(2).max(50).optional(),
	handle: z.string().min(2).max(250).optional(),
	email: z.string().email(),
	password: z.string().min(2).max(40),
})

export default function LogInPage() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') ?? '/declarations'
	// const router = useRouter()

	const form = useForm<z.infer<typeof formSchema>>({
		mode: 'onSubmit',
		resolver: zodResolver(formSchema),
	})

	const submit = form.handleSubmit(async values => {
		await signIn('credentials', {
			redirect: true,
			email: values.email,
			password: values.password,
			callbackUrl,
		})
	})

	return (
		<>
			<Prose>
				<h1>Sign In</h1>
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
					<Button type='submit'>Sign In →</Button>
					<div>
						<Prose>
							<p>Don&#039;t have an account?</p>
							<Link tw='block' href='/register'>
								<Button variant='outline'>Register</Button>
							</Link>
						</Prose>
					</div>
				</form>
			</Form>
		</>
	)
}
