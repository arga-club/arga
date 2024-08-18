'use client'

import { type Ref, useEffect, useMemo } from 'react'
import { parseEventLogs, type Hash, decodeEventLog } from 'viem'
import { useWaitForTransactionReceipt } from 'wagmi'
import { Card, CardContent, CardHeader } from '~/app/_components/ui/card'
import { withDisplayName } from '~/app/_components/withDisplayName'
import { argaDiamondAbi } from '~/lib/generated'
import { usePendingTransactions } from '~/stores/pending-transactions'
import { type Declaration } from '~/types/arga'

export const PendingDeclaration = withDisplayName(
	'PendingDeclaration',
	(
		{
			hash,
			actorDeclarations,
		}: {
			hash: Hash
			actorDeclarations?: readonly Declaration[]
		},
		ref: Ref<HTMLDivElement>,
	) => {
		const waitForTransactionReceipt = useWaitForTransactionReceipt({ hash })
		const { removePendingTransaction } = usePendingTransactions()
		const status = waitForTransactionReceipt.data?.status

		const declaration = useMemo(() => {
			const [logRaw] =
				parseEventLogs({
					abi: argaDiamondAbi,
					logs: waitForTransactionReceipt.data?.logs ?? [],
				}) ?? []
			if (!logRaw) return
			const log = decodeEventLog({
				abi: argaDiamondAbi,
				data: logRaw.data,
				topics: logRaw.topics,
			})
			if (log.eventName !== 'DeclarationMade') return
			return log.args.declaration
		}, [waitForTransactionReceipt.data?.logs])

		useEffect(() => {
			if (!actorDeclarations) return
			if (!declaration) return
			const confirmedDeclaration = actorDeclarations.find(({ id }) => id === declaration.id)
			if (!confirmedDeclaration) return
			removePendingTransaction(hash)
		}, [actorDeclarations, declaration, hash, removePendingTransaction])

		return (
			<Card ref={ref}>
				<CardContent>
					<CardHeader />
					{!declaration ? status : `${declaration.summary} (pending)`}
				</CardContent>
			</Card>
		)
	},
)
