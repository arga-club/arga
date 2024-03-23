'use client'

import { hardhat } from 'viem/chains'
import { useWatchPendingTransactions } from 'wagmi'
import { usePendingTransactions } from '~/stores/pending-transactions'

export const DeclarationWatcher = ({ children }: { children: React.ReactNode }) => {
	const { addPendingTransactions } = usePendingTransactions()
	useWatchPendingTransactions({
		chainId: hardhat.id,
		poll: true,
		pollingInterval: 100,
		onTransactions: pendingTransactions => {
			addPendingTransactions(pendingTransactions)
		},
	})

	return children
}
