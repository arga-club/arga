import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'
import { walletSchema } from '~/types/auth'

export const walletRouter = createTRPCRouter({
	getAll: protectedProcedure.query(({ ctx }) => {
		const { db, session } = ctx
		return db.wallet.findMany({
			where: { userId: session.user.id },
		})
	}),
	add: protectedProcedure.input(walletSchema).mutation(({ ctx, input }) => {
		const { db, session } = ctx
		return db.wallet.create({
			data: {
				userId: session.user.id,
				...input,
			},
		})
	}),
})
