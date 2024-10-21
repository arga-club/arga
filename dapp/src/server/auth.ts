import { PrismaAdapter } from '@auth/prisma-adapter'
import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
import DiscordProvider from 'next-auth/providers/discord'
import { compare } from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import { env } from '~/env'
import { db } from '~/server/db'
import { verifyFarcasterSignature } from '~/lib/farcaster'
import { type User, userSchema } from '~/types/auth'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: User
	}

	// interface User {
	//   // ...other properties
	//   // role: UserRole;
	// }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db) as Adapter,
	pages: {
		signIn: '/sign-in',
		signOut: '/sign-out',
	},
	session: {
		strategy: 'jwt',
	},
	providers: [
		DiscordProvider({
			clientId: env.DISCORD_CLIENT_ID,
			clientSecret: env.DISCORD_CLIENT_SECRET,
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
		CredentialsProvider({
			name: 'Sign in',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					return null
				}

				const user = await db.user.findUnique({
					where: {
						email: credentials.email,
					},
				})

				if (!user?.password || !(await compare(credentials.password, user.password))) {
					return null
				}

				const userParsed = userSchema.safeParse(user)

				return !userParsed.success ? null : userParsed.data
			},
		}),
		CredentialsProvider({
			id: 'farcaster-credentials',
			name: 'Sign in with Farcaster',
			credentials: {
				message: {
					label: 'Message',
					type: 'text',
					placeholder: '0x0',
				},
				signature: {
					label: 'Signature',
					type: 'text',
					placeholder: '0x0',
				},
				nonce: {
					label: 'Nonce',
					type: 'text',
					placeholder: '0x0',
				},
			},
			async authorize(credentials) {
				if (!credentials) throw 'no credentials'

				const { success, fid } = await verifyFarcasterSignature({
					message: credentials.message,
					signature: credentials.signature as `0x${string}`,
					nonce: credentials.nonce,
				})
				if (!success) return null

				const user = await db.user.findUnique({
					where: { fid },
				})

				const userParsed = userSchema.safeParse(user)

				return !userParsed.success ? null : userParsed.data
			},
		}),
	],
	callbacks: {
		jwt: ({ token, trigger, user }) => {
			if (trigger !== 'signUp' && trigger !== 'signIn') {
				return token
			}
			return { user }
		},
		session: ({ session, token }) => {
			const user = userSchema.safeParse(token.user)
			return !user.success ? session : { ...session, user: user.data }
		},
	},
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
