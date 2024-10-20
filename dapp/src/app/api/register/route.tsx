import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'
import { fire } from '@jgjp/fire'
import { verifyFarcasterSignature } from '~/lib/farcaster'
import { db } from '~/server/db'
import type { FIXME } from '~/types/utils'
import { registerCredentialsSchema } from '~/types/auth'

export async function POST(req: Request) {
	try {
		console.log('POST')
		const credentials = registerCredentialsSchema.parse(await req.json())
		console.log({ credentials })

		const user = await fire(async () => {
			if ('email' in credentials) {
				return db.user.create({
					data: {
						email: credentials.email.toLowerCase(),
						password: await hash(credentials.password, 12),
					},
				})
			} else {
				const { success, fid } = await verifyFarcasterSignature({
					message: credentials.message,
					signature: credentials.signature as `0x${string}`,
					nonce: credentials.nonce,
				})
				if (!success) {
					throw new Error('could not verify signature')
				}
				return db.user.create({
					data: {
						displayName: credentials.displayName,
						username: credentials.username,
						fid,
						image: credentials.image,
					},
				})
			}
		})
		console.log({ user })

		return NextResponse.json({ user })
	} catch (e) {
		const error: FIXME = e
		return new NextResponse(
			JSON.stringify({
				status: 'error',
				message: error.message,
			}),
			{ status: 500 },
		)
	}
}
