'use client'

import { useAccount } from 'wagmi'
import { useReadArgaDiamondActorDeclarations, useReadArgaDiamondWitnessDeclarations } from '~/lib/generated'
import { PendingDeclaration } from '~/app/_components/pending-declaration'
import { usePendingTransactions } from '~/stores/pending-transactions'
import { chainId } from '~/lib/wagmi-config'
import { DeclarationCard } from '~/app/_components/DeclarationCard'

export default function MyDeclarations() {
	const { address, isConnecting } = useAccount()
	const { pendingTransactions } = usePendingTransactions()
	const { isInitialLoading: isActorDeclarationsInitialLoading, data: actorDeclarations } =
		useReadArgaDiamondActorDeclarations({
			query: { enabled: !!address, refetchInterval: pendingTransactions.length ? 2000 : undefined },
			args: address ? [address] : undefined,
			chainId,
		})
	const { isInitialLoading: isWitnessDeclarationsInitialLoading, data: witnessDeclarations } =
		useReadArgaDiamondWitnessDeclarations({
			query: { enabled: !!address, refetchInterval: pendingTransactions.length ? 2000 : undefined },
			args: address ? [address] : undefined,
			chainId,
		})

	return (
		<div tw='space-y-8'>
			{isActorDeclarationsInitialLoading || isWitnessDeclarationsInitialLoading ? (
				'Loading..'
			) : isConnecting ? (
				'Connecting..'
			) : !pendingTransactions?.length && !actorDeclarations?.length && !witnessDeclarations?.length ? (
				'No declarations..'
			) : (
				<>
					{pendingTransactions
						?.slice()
						.reverse()
						.map(pendingTransaction => (
							<PendingDeclaration
								key={pendingTransaction}
								hash={pendingTransaction}
								actorDeclarations={actorDeclarations}
							/>
						))}
					{actorDeclarations
						?.slice()
						.reverse()
						.map(declaration => <DeclarationCard key={declaration.id} declaration={declaration} />)}
					{witnessDeclarations
						?.slice()
						.reverse()
						.map(declaration => <DeclarationCard key={declaration.id} declaration={declaration} />)}
				</>
			)}
		</div>
	)
}
