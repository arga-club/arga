'use client'

import { signIn } from 'next-auth/react'
import styled, { css } from 'styled-components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'
import { Prose } from '~/app/_components/ui/prose'
import borderImage from '~/images/border-horz-01.svg'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter } from '~/app/_components/ui/card'
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
			<Border $flip tw='-mt-2' />
			<div tw='container'>
				<div tw='pt-16 pb-20 space-y-10'>
					<Prose>
						<h1>Log In</h1>
					</Prose>
					<Card className='max-w-screen-sm'>
						<Form {...form}>
							<form onSubmit={submit}>
								<CardContent className='space-y-6 pt-8'>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email Address</FormLabel>
												<FormControl>
													<Input placeholder='riches@plebemail.ro' {...field} />
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
								</CardContent>
								<CardFooter>
									<Button type='submit'>Register</Button>
								</CardFooter>
							</form>
						</Form>
					</Card>
				</div>
			</div>
		</>
	)
}

const Border = styled.div<{ $flip?: boolean }>`
	background: url(${borderImage.src});
	background-size: ${borderImage.width / 3}px ${borderImage.height / 3}px;
	height: ${borderImage.height / 3}px;
	${({ $flip }) =>
		$flip &&
		css`
			transform: scaleY(-1);
		`}
`
