import { PrismaAdapter } from '@auth/prisma-adapter'
import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth'
import { createAppClient, viemConnector } from '@farcaster/auth-client'
import { type Adapter } from 'next-auth/adapters'
import DiscordProvider from 'next-auth/providers/discord'
import { compare } from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import { env } from '~/env'
import { db } from '~/server/db'

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
			// ...other properties
			// role: UserRole;
		} & DefaultSession['user']
	}

	// interface User {
	//   // ...other properties
	//   // role: UserRole;
	// }
}

type AuthToken =
	| {
			id: string
			credentialsType: 'email'
			email: string
	  }
	| {
			id: string
			credentialsType: 'farcaster'
			username: string
			profileImage: string
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
				if (!credentials?.email || !credentials.password) {
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

				return {
					id: user.id,
					credentialsType: 'email',
					email: user.email,
				} as AuthToken
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
				// In a production app with a server, these should be fetched from
				// your Farcaster data indexer rather than have them accepted as part
				// of credentials.
				name: {
					label: 'Name',
					type: 'text',
					placeholder: '0x0',
				},
				pfp: {
					label: 'Pfp',
					type: 'text',
					placeholder: '0x0',
				},
			},
			async authorize(credentials, req) {
				console.log('authorize')
				const { body } = req
				const csrfToken = body?.csrfToken
				if (!csrfToken) throw 'no token'
				if (!credentials) throw 'no credentials'
				console.log({ csrfToken })
				console.log({ credentials })

				const appClient = createAppClient({
					ethereum: viemConnector(),
				})

				const verifyResponse = await appClient.verifySignInMessage({
					message: credentials.message,
					signature: credentials.signature as `0x${string}`,
					domain: 'localhost',
					nonce: csrfToken,
				})
				console.log({ verifyResponse })
				const { success, fid } = verifyResponse
				console.log({ success, fid })

				if (!success) {
					return null
				}

				return {
					id: fid.toString(),
					credentialsType: 'farcaster',
					username: credentials?.name,
					profileImage: credentials?.pfp,
				} as AuthToken
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
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const user: AuthToken = (token as any).user as AuthToken
			return { ...session, user }
		},
	},
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
