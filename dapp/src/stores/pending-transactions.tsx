import { type Hash } from 'viem'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usePendingTransactions = create<{
	pendingTransactions: Hash[]
	addPendingTransactions: (pendingTransactions: Hash[]) => void
	removePendingTransaction: (pendingTransaction: Hash) => void
}>()(
	persist(
		(set, get) => ({
			pendingTransactions: [],
			addPendingTransactions: pendingTransactions =>
				set({
					pendingTransactions: [...get().pendingTransactions, ...pendingTransactions],
				}),
			removePendingTransaction: pendingTransaction =>
				set({
					pendingTransactions: get().pendingTransactions.filter(
						_pendingTransaction => _pendingTransaction !== pendingTransaction,
					),
				}),
		}),
		{ name: 'pending-transactions' },
	),
)
