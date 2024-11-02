import { compare, hash } from 'bcryptjs'
import { z } from 'zod'
import { verifyFarcasterSignature } from '~/lib/farcaster'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc'
import { linkFarcasterSchema, registerCredentialsSchema } from '~/types/auth'

export const userRouter = createTRPCRouter({
	getCurrent: protectedProcedure.query(async ({ ctx }) => {
		const { db, session } = ctx
		return db.user
			.findUnique({
				where: { id: session?.user.id },
				select: {
					displayName: true,
					username: true,
					email: true,
					fid: true,
					image: true,
					password: true,
				},
			})
			.then(user =>
				!user
					? user
					: {
							...user,
							password: !!user.password,
						},
			)
	}),
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
	linkFarcaster: protectedProcedure.input(linkFarcasterSchema).mutation(async ({ ctx, input }) => {
		const { db, session } = ctx
		const { success, fid } = await verifyFarcasterSignature({
			message: input.message,
			signature: input.signature as `0x${string}`,
			nonce: input.nonce,
		})
		if (!success) {
			throw new Error('could not verify signature')
		}
		await db.user.update({
			where: { id: session.user.id },
			data: {
				displayName: input.displayName,
				username: input.username,
				fid,
				image: input.image,
			},
		})
	}),
	changeEmail: protectedProcedure
		.input(
			z.object({
				email: z.string().email(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { db, session } = ctx
			await db.user.update({
				where: { id: session.user.id },
				data: {
					email: input.email,
				},
			})
		}),
	changePassword: protectedProcedure
		.input(
			z.object({
				currentPassword: z.string(),
				newPassword: z.string(),
				newPasswordConfirmation: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { db, session } = ctx
			const user = await db.user.findUnique({
				where: { id: session.user.id },
			})
			if (!user) {
				throw new Error('could not find existing user')
			}
			if (user.password) {
				const passwordMatches = await compare(input.currentPassword, user.password)
				if (!passwordMatches) {
					throw new Error('password is not correct')
				}
			}
			if (input.newPassword !== input.newPasswordConfirmation) {
				throw new Error("passwords don't match")
			}
			await db.user.update({
				where: { id: session.user.id },
				data: {
					password: await hash(input.newPassword, 12),
				},
			})
		}),
})
