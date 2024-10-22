import assert from 'assert'
import { createAppClient, viemConnector } from '@farcaster/auth-client'
import { z } from 'zod'

export const farcasterConfig = {
	relay: 'https://relay.farcaster.xyz',
	rpcUrl: `https://optimism-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
	siweUri: `${process.env.NEXT_PUBLIC_URL}/register`,
	domain: process.env.NEXT_PUBLIC_DOMAIN,
}

assert(process.env.NEXT_PUBLIC_DOMAIN)

export const verifyFarcasterSignature = ({
	message,
	signature,
	nonce,
}: {
	message: string
	signature: string
	nonce: string
}) => {
	assert(process.env.NEXT_PUBLIC_DOMAIN)
	const appClient = createAppClient({ ethereum: viemConnector() })
	const hexSignature = z
		.string()
		.refine((value): value is `0x${string}` => value.startsWith('0x'))
		.parse(signature)
	return appClient.verifySignInMessage({
		message,
		signature: hexSignature,
		domain: process.env.NEXT_PUBLIC_DOMAIN,
		nonce,
	})
}
