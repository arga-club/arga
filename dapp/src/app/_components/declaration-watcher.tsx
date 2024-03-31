'use client'

import { useWatchPendingTransactions } from 'wagmi'
import { usePendingTransactions } from '~/stores/pending-transactions'
import { logFromPendingTransaction } from '~/lib/ethereum-utils'
import { chainId } from '~/lib/wagmi-config'

export const DeclarationWatcher = ({ children }: { children: React.ReactNode }) => {
	const { addPendingTransactions } = usePendingTransactions()
	useWatchPendingTransactions({
		chainId,
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
