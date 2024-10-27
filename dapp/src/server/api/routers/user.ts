import { hash } from 'bcryptjs'
import { verifyFarcasterSignature } from '~/lib/farcaster'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { registerCredentialsSchema } from '~/types/auth'

export const userRouter = createTRPCRouter({
	add: publicProcedure.input(registerCredentialsSchema).mutation(async ({ ctx, input }) => {
		const { db } = ctx
		if ('email' in input) {
			return db.user.create({
				data: {
					email: input.email.toLowerCase(),
					password: await hash(input.password, 12),
				},
				include: { wallets: true },
			})
		} else {
			const { success, fid } = await verifyFarcasterSignature({
				message: input.message,
				signature: input.signature as `0x${string}`,
				nonce: input.nonce,
			})
			if (!success) {
				throw new Error('could not verify signature')
			}
			const existingUser = await db.user.findUnique({ where: { fid } })
			return (
				existingUser ??
				db.user.create({
					data: {
						displayName: input.displayName,
						username: input.username,
						fid,
						image: input.image,
					},
					include: { wallets: true },
				})
			)
		}
	}),
})
