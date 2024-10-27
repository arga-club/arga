import { z } from 'zod'

export const walletSchema = z.object({
	address: z.string(),
	icon: z.string().optional().nullable(),
	name: z.string().optional().nullable(),
})

export type Wallet = z.infer<typeof walletSchema>

export const sessionUserSchema = z.object({
	id: z.string(),
})

export type User = z.infer<typeof sessionUserSchema>

export const registerCredentialsSchema = z.union([
	z.object({
		displayName: z.string(),
		username: z.string(),
		fid: z.number(),
		image: z.string(),
		message: z.string(),
		signature: z.string(),
		nonce: z.string(),
	}),
	z.object({
		email: z.string(),
		password: z.string(),
	}),
])

export type RegisterCredentials = z.infer<typeof registerCredentialsSchema>

export const linkFarcasterSchema = z.object({
	displayName: z.string(),
	username: z.string(),
	fid: z.number(),
	image: z.string(),
	message: z.string(),
	signature: z.string(),
	nonce: z.string(),
})
