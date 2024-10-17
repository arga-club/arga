'use client'

import { getCsrfToken, useSession, signIn, signOut } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'
import { Prose } from '~/app/_components/ui/prose'
import '@farcaster/auth-kit/styles.css'
import { SignInButton, StatusAPIResponse } from '@farcaster/auth-kit'
import { useCallback, useState } from 'react'

const formSchema = z.object({
	message: z.string(),
	signature: z.string(),
	name: z.string(),
	pfp: z.string(),
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
			callbackUrl,
		})
	})

	const [error, setError] = useState(false)

	const getNonce = useCallback(async () => {
		const nonce = await getCsrfToken()
		if (!nonce) throw new Error('Unable to generate nonce')
		return nonce
	}, [])

	const handleSuccess = useCallback((res: StatusAPIResponse) => {
		signIn('farcaster-credentials', {
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
					<div style={{ position: 'fixed', top: '12px', right: '12px' }}>
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
