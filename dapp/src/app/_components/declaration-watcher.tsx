'use client'

import { hardhat } from 'viem/chains'
import { useWatchPendingTransactions } from 'wagmi'
import { usePendingTransactions } from '~/stores/pending-transactions'
import { logFromPendingTransaction } from '~/lib/ethereum-utils'

export const DeclarationWatcher = ({ children }: { children: React.ReactNode }) => {
	const { addPendingTransactions } = usePendingTransactions()
	useWatchPendingTransactions({
		chainId: hardhat.id,
		poll: true,
		pollingInterval: 100,
		onTransactions: pendingTransactions =>
			pendingTransactions.map(pendingTransaction =>
				logFromPendingTransaction(pendingTransaction).then(log => {
					if (log?.eventName !== 'DeclarationMade') return
					addPendingTransactions([pendingTransaction])
				}),
			),
	})

	return children
}
