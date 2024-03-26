'use client'

import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useAccount, useReadContract } from 'wagmi'
import { hardhat } from 'wagmi/chains'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/app/_components/ui/card'
import { argaAbi } from '~/lib/generated'
import { PendingDeclaration } from '~/app/_components/pending-declaration'
import { usePendingTransactions } from '~/stores/pending-transactions'
import { normalizeBigJSON } from '~/lib/ethereum-utils'
import { LazyReactJSON } from '~/lib/react-utils'

export default function ActorDeclarations() {
	const { address, isConnecting } = useAccount()
	const { pendingTransactions } = usePendingTransactions()

	const { isInitialLoading, data: actorDeclarations } = useReadContract({
		query: { enabled: !!address, refetchInterval: pendingTransactions.length ? 2000 : undefined },
		abi: argaAbi,
		address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
		functionName: 'actorDeclarations',
		args: address ? [address] : undefined,
		chainId: hardhat.id,
	})

	return (
		<div tw='container'>
			<div tw='px-3 pt-16 pb-20 space-y-10'>
				<PageHeading>My declarations</PageHeading>
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
										<Link href={`/declaration/${declaration.id}`}>
											<Button>View</Button>
										</Link>
									</CardFooter>
								</Card>
							))}
						</>
					)}
				</div>
				<Link tw='block' href='/declaration/new'>
					<Button>New Declaration</Button>
				</Link>
			</div>
		</div>
	)
}

const PageHeading = styled.h1`
	${tw`text-3xl`}
`
