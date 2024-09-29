import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { createAppClient, viemConnector } from "@farcaster/auth-client"

export const useFarcasterAuth = () => {
  const { data: session, status } = useSession()
  const [appClient, setAppClient] = useState<any>(null)

  useEffect(() => {
    const client = createAppClient({
      ethereum: viemConnector(),
    })
    setAppClient(client)
  }, [])

  const farcasterSignIn = async () => {
    if (!appClient) return

    try {
      const signInResult = await appClient.signIn({
        domain: 'arga.club',
        siweUri: 'https://arga.xyz/api/auth/farcaster', // TODO will need to replace this with actual route
      })

      if (signInResult.success) {
        await signIn('credentials', {
          message: signInResult.message,
          signature: signInResult.signature,
          name: signInResult.userInfo.name,
          pfp: signInResult.userInfo.pfp,
          nonce: signInResult.nonce,
          redirect: false,
        })
      }
    } catch (error) {
      console.error('Farcaster sign-in error:', error)
    }
  }

  const farcasterSignOut = async () => {
    await signOut()
  }

  return {
    user: session?.user,
    isLoading: status === 'loading',
    signIn: farcasterSignIn,
    signOut: farcasterSignOut,
  }
}
