import { PrismaAdapter } from '@auth/prisma-adapter'
import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
import DiscordProvider from 'next-auth/providers/discord'
import { compare } from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import { env } from '~/env'
import { db } from '~/server/db'
import { type FIXME } from '~/types/utils'

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

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db) as Adapter,
	pages: {
		signIn: '/login',
		signOut: '/logout',
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
					email: user.email,
				}
			},
		}),
	],
	callbacks: {
		session: ({ session, token }) => {
			return {
				...session,
				user: {
					email: session.user.email,
					id: token.id,
				},
			}
		},
		jwt: ({ token, user }) => {
			if (user) {
				const u = user as unknown as FIXME
				return {
					email: token.email,
					id: u.id,
				}
			}
			return token
		},
	},
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
