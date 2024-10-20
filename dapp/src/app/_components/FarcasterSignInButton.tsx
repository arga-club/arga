import { useCallback, useEffect, useRef, useState } from 'react'
// import { type StatusAPIResponse } from '@farcaster/auth-client'
import { useSignIn, QRCode } from '@farcaster/auth-kit'
import { getCsrfToken, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '~/app/_components/ui/button'
import { useIsMobile } from '~/hooks/use-mobile'
import { FarcasterLogo } from '~/app/_components/FarcasterLogo'
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '~/app/_components/ui/dialog'
import { registerCredentialsSchema } from '~/types/auth'

export function FarcasterSignInButton() {
	const [shouldDialogOpen, setShouldDialogOpen] = useState(false)
	const nonceRef = useRef<null | string>(null)
	const router = useRouter()

	const getNonce = useCallback(async () => {
		const nonce = await getCsrfToken()
		if (!nonce) throw new Error('Unable to generate nonce')
		nonceRef.current = nonce
		return nonce
	}, [])

	const signInState = useSignIn({
		nonce: getNonce,
		onStatusResponse: ({ state, nonce, ...res }) => {
			if (state !== 'completed') return
			console.log('onStatusResponse', res)
			void fetch('/api/register', {
				method: 'POST',
				body: JSON.stringify(
					registerCredentialsSchema.parse({
						message: res.message,
						signature: res.signature,
						username: res.username,
						fid: res.fid,
						image: res.pfpUrl,
						nonce,
						displayName: res.displayName,
					}),
				),
				headers: {
					'Content-Type': 'application/json',
				},
			}).then(async () => {
				setShouldDialogOpen(false)
				await signIn('farcaster-credentials', {
					redirect: false,
					message: res.message,
					signature: res.signature,
					nonce,
				})
				router.push('/declarations')
			})
		},
		onError: res => {
			console.log('onError')
			console.log({ res })
		},
	})
	const { connect, reconnect, isSuccess, isError, error, channelToken, url, validSignature } = signInState

	const isMobile = useIsMobile()

	const onClick = useCallback(() => {
		if (isError) {
			reconnect()
		}
		setShouldDialogOpen(true)
		signInState.signIn()
		if (url && isMobile) {
			window.open(url, '_blank')
		}
	}, [isError, isMobile, reconnect, signInState, url])

	const authenticated = isSuccess && validSignature

	useEffect(() => {
		if (!channelToken) {
			void connect()
		}
	}, [channelToken, connect])

	return (
		<div className='fc-authkit-signin-button'>
			{authenticated ? (
				<div>authed</div>
			) : (
				<>
					<Button onClick={onClick} tw='space-x-1 bg-[hsl(262,44%,56%)] hover:bg-[hsl(262,44%,65%)]'>
						<FarcasterLogo height={20} fill='white' />
						<span>Farcaster</span>
					</Button>
					<Dialog open={shouldDialogOpen} onOpenChange={setShouldDialogOpen}>
						<DialogContent tw='w-min'>
							<DialogHeader>Sign in with Farcaster</DialogHeader>
							<DialogDescription>
								Scan the code below with your phone&#039;s camera.
								{!url ? (
									'Loading..'
								) : (
									<div tw='p-14'>
										<QRCode uri={url} size={200} />
									</div>
								)}
								{isError && (error?.message ?? 'Unknown error, please try again.')}
							</DialogDescription>
						</DialogContent>
					</Dialog>
				</>
			)}
		</div>
	)
}
