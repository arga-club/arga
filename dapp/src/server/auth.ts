import { PrismaAdapter } from '@auth/prisma-adapter'
import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
import DiscordProvider from 'next-auth/providers/discord'
import CredentialsProvider from 'next-auth/providers/credentials'
import { env } from '~/env'
import { db } from '~/server/db'
import { createAppClient, viemConnector } from "@farcaster/auth-client"

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string
			fid?: string
			// ...other properties
			// role: UserRole;
		} & DefaultSession['user']
	}

	 interface User {
		 fid?: string
	 }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id,
				fid: user.fid,
			},
		}),
	},
	adapter: PrismaAdapter(db) as Adapter,
	providers: [
		DiscordProvider({
			clientId: env.DISCORD_CLIENT_ID,
			clientSecret: env.DISCORD_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: "Sign in with Farcaster",
			credentials: {
				message: { label: "Message", type: "text" },
				signature: { label: "Signature", type: "text" },
				name: { label: "Name", type: "text" },
				pfp: { label: "Profile Picture", type: "text" },
				nonce: { label: "Nonce", type: "text" },
			},
			async authorize(credentials) {
				if (!credentials?.message || !credentials?.signature) {
					return null
				}

				const appClient = createAppClient({
					ethereum: viemConnector(),
				})

				try {
					const verifyResponse = await appClient.verifySignInMessage({
						message: credentials.message,
						signature: credentials.signature as `0x${string}`,
						domain: "arga.club",
						nonce: credentials.nonce,
					})

					if (!verifyResponse.success) {
						return null
					}

					// TODO check if user exists, if not create one
					return {
						id: verifyResponse.fid.toString(),
						fid: verifyResponse.fid.toString(),
						name: credentials.name,
						image: credentials.pfp,
					}
				} catch (error) {
					console.error("Error verifying Farcaster auth:", error)
					return null
				}
			},
		}),
		/**
		 * ...add more providers here.
		 *
		 * Most other providers require a bit more work than the Discord provider. For example, the
		 * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
		 * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
		 *
		 * @see https://next-auth.js.org/providers/github
		 */
	],
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
