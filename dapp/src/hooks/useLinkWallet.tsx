import { useAppKitAccount, useWalletInfo } from '@reown/appkit/react'
import { useEffect, useRef } from 'react'
import { sleep } from '~/lib/react-utils'
import { trpc } from '~/trpc/react'

export const useLinkWallet = () => {
	const { address, status } = useAppKitAccount()
	const { walletInfo } = useWalletInfo()

	const { data: user } = trpc.user.getCurrent.useQuery()
	const triedToUpdate = useRef(false)
	const { data: wallets } = trpc.wallet.getAll.useQuery()
	const utils = trpc.useUtils()
	const addWallet = trpc.wallet.add.useMutation({
		onSuccess: async () => {
			await utils.wallet.getAll.invalidate()
			await utils.wallet.getAll.refetch()
			await sleep()
			triedToUpdate.current = false
		},
	})

	useEffect(() => {
		if (triedToUpdate.current) return
		if (status !== 'connected') return
		if (!address) return
		if (!user) return
		if (!wallets) return
		if (wallets.some(wallet => wallet.address === address)) return
		triedToUpdate.current = true
		void addWallet.mutateAsync({
			address,
			icon: walletInfo?.icon,
			name: walletInfo?.name,
		})
	}, [addWallet, address, status, user, walletInfo?.icon, walletInfo?.name, wallets])
}
