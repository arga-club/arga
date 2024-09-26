'use client'

import { useAccount } from 'wagmi'
import { zeroAddress } from 'viem'
import { useReadArgaDiamondCommunityDeclarations } from '~/lib/generated'
import { usePendingTransactions } from '~/stores/pending-transactions'
import { chainId } from '~/lib/wagmi-config'
import { DeclarationCard } from '~/app/_components/DeclarationCard'

export default function CommunityDeclarations() {
	const { address, isConnecting } = useAccount()
	const { pendingTransactions } = usePendingTransactions()
	const { isInitialLoading, data: communityDeclarations } = useReadArgaDiamondCommunityDeclarations({
		query: { refetchInterval: pendingTransactions.length ? 2000 : undefined },
		args: [address ?? zeroAddress, 4n],
		chainId,
	})

	return (
		<div tw='space-y-8'>
			{isInitialLoading
				? 'Loading..'
				: isConnecting
					? 'Connecting..'
					: !communityDeclarations?.length
						? 'No declarations..'
						: communityDeclarations?.map(declaration => (
								<DeclarationCard key={declaration.id} declaration={declaration} />
							))}
		</div>
	)
}
