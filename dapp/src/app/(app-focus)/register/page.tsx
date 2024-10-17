'use client'

import { getCsrfToken, useSession, signIn, signOut } from 'next-auth/react'
import '@farcaster/auth-kit/styles.css'
import { SignInButton, type StatusAPIResponse } from '@farcaster/auth-kit'
import { useCallback, useState } from 'react'
import { Prose } from '~/app/_components/ui/prose'

export default function LogInPage() {

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
