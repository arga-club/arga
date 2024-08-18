'use client'

import Link from 'next/link'
import { useAccount } from 'wagmi'
import { Card, CardContent, CardFooter, CardHeader } from '~/app/_components/ui/card'
import { useReadArgaDiamondCommunityDeclarations } from '~/lib/generated'
import { usePendingTransactions } from '~/stores/pending-transactions'
import { normalizeBigJSON } from '~/lib/ethereum-utils'
import { LazyReactJSON } from '~/lib/react-utils'
import { chainId } from '~/lib/wagmi-config'
import { Button } from '~/app/_components/ui/button'

export default function CommunityDeclarations() {
	const { address, isConnecting } = useAccount()
	const { pendingTransactions } = usePendingTransactions()
	const { isInitialLoading, data: communityDeclarations } = useReadArgaDiamondCommunityDeclarations({
		query: { enabled: !!address, refetchInterval: pendingTransactions.length ? 2000 : undefined },
		args: address ? [address, 4n] : undefined,
		chainId,
	})

	return (
		<div tw='space-y-4'>
			{isInitialLoading
				? 'Loading..'
				: isConnecting
					? 'Connecting..'
					: !communityDeclarations?.length
						? 'No declarations..'
						: communityDeclarations?.map(declaration => (
								<Card key={declaration.id}>
									<CardHeader>{declaration.summary}</CardHeader>
									<CardContent>
										<LazyReactJSON src={normalizeBigJSON(declaration)} collapsed name='declaration' />
									</CardContent>
									<CardFooter>
										<Link href={`/declarations/${declaration.id}`}>
											<Button>View</Button>
										</Link>
									</CardFooter>
								</Card>
							))}
		</div>
	)
}
