import { z } from 'zod'

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
		email: z.string().email(),
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
