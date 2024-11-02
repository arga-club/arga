import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'

export const walletRouter = createTRPCRouter({
	getAll: protectedProcedure.query(({ ctx }) => {
		const { db, session } = ctx
		return db.wallet.findMany({
			where: { userId: session.user.id },
		})
	}),
	add: protectedProcedure
		.input(
			z.object({
				address: z.string(),
				icon: z.string().optional().nullable(),
				name: z.string().optional().nullable(),
			}),
		)
		.mutation(({ ctx, input }) => {
			const { db, session } = ctx
			return db.wallet.create({
				data: {
					userId: session.user.id,
					...input,
				},
			})
		}),
	remove: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.mutation(({ ctx, input }) => {
			const { db, session } = ctx
			return db.wallet.delete({
				where: {
					id: input.id,
					userId: session.user.id,
				},
			})
		}),
	editLabel: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				label: z.string(),
			}),
		)
		.mutation(({ ctx, input }) => {
			const { db, session } = ctx
			return db.wallet.update({
				where: {
					id: input.id,
					userId: session.user.id,
				},
				data: {
					label: input.label,
				},
			})
		}),
})
