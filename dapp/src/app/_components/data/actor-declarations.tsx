'use client'

import Link from 'next/link'
import { useAccount } from 'wagmi'
import { Card, CardContent, CardFooter, CardHeader } from '~/app/_components/ui/card'
import { useReadArgaActorDeclarations } from '~/lib/generated'
import { PendingDeclaration } from '~/app/_components/pending-declaration'
import { usePendingTransactions } from '~/stores/pending-transactions'
import { normalizeBigJSON } from '~/lib/ethereum-utils'
import { LazyReactJSON } from '~/lib/react-utils'
import { chainId } from '~/lib/wagmi-config'
import { Prose } from '~/app/_components/ui/prose'
import { Button } from '~/app/_components/ui/button'

export default function ActorDeclarations() {
	const { address, isConnecting } = useAccount()
	const { pendingTransactions } = usePendingTransactions()

	const { isInitialLoading, data: actorDeclarations } = useReadArgaActorDeclarations({
		query: { enabled: !!address, refetchInterval: pendingTransactions.length ? 2000 : undefined },
		args: address ? [address] : undefined,
		chainId,
	})

	return (
		<>
			<Prose>
				<h1>My declarations</h1>
			</Prose>
			<div tw='space-y-4'>
				{isInitialLoading ? (
					'Loading..'
				) : isConnecting ? (
					'Connecting..'
				) : !pendingTransactions?.length && !actorDeclarations?.length ? (
					'No declarations..'
				) : (
					<>
						{pendingTransactions?.map(pendingTransaction => (
							<PendingDeclaration
								key={pendingTransaction}
								hash={pendingTransaction}
								actorDeclarations={actorDeclarations}
							/>
						))}
						{actorDeclarations?.map(declaration => (
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
					</>
				)}
			</div>
			<Link tw='block' href='/declarations/new'>
				<Button>New Declaration</Button>
			</Link>
		</>
	)
}
