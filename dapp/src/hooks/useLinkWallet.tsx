import { useAppKitAccount, useWalletInfo } from '@reown/appkit/react'
import { useSession } from 'next-auth/react'
import { useEffect, useRef } from 'react'
import { sleep } from '~/lib/react-utils'
import { trpc } from '~/trpc/react'

export const useLinkWallet = () => {
	const { address, status } = useAppKitAccount()
	const { walletInfo } = useWalletInfo()

	const { data: session } = useSession()
	const user = session?.user
	const triedToUpdate = useRef(false)
	const { data: wallets } = trpc.wallet.getAll.useQuery()
	const utils = trpc.useUtils()
	const addWallet = trpc.wallet.add.useMutation({
		onSuccess: async () => {
			await utils.wallet.invalidate()
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
		addWallet.mutate({
			address,
			icon: walletInfo?.icon,
			name: walletInfo?.name,
		})
	}, [addWallet, address, status, user, walletInfo?.icon, walletInfo?.name, wallets])
}
