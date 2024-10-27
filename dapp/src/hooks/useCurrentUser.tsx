import { trpc } from '~/trpc/react'

export const useCurrentUser = () => {
	const { data: user } = trpc.user.getCurrent.useQuery()
	return { user }
}
