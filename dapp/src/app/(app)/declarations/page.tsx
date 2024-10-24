'use client'

import Link from 'next/link'
import CommunityDeclarations from '~/app/_components/data/community-declarations'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent } from '~/app/_components/ui/card'
import { Prose } from '~/app/_components/ui/prose'
import { normalizeBigJSON } from '~/lib/ethereum-utils'
import { useReadArgaDiamondPool } from '~/lib/generated'
import { LazyReactJSON } from '~/lib/react-utils'
import { chainId } from '~/lib/wagmi-config'

export default function Home() {
	const { data: pool } = useReadArgaDiamondPool({ chainId })
	return (
		<div tw="flex gap-8">
			<div tw='md:w-3/4'>
				<Prose>
					<h1>Declarations</h1>
				</Prose>
				<CommunityDeclarations />
			</div>
			<div tw='md:w-1/4'>
				<div tw='space-y-10'>
					<Prose>
						<h1>Pool</h1>
						<p>
							When a declaration is rejected by its witness, its collateral is sent to this pool instead of
							returned to the user. All actors concluding a declaration when assets are in the pool have a chance
							to win those assets.
						</p>
					</Prose>
					<Card className='max-w-screen-sm'>
						{!pool?.length ? (
							<CardContent className='space-y-6 pt-8'>
								<Prose>0 ETH</Prose>
							</CardContent>
						) : (
							<CardContent className='space-y-6 pt-8'>
								<LazyReactJSON src={normalizeBigJSON(pool)} name='pool' />
							</CardContent>
						)}
					</Card>
					<Link tw='block' href='/declarations/new'>
						<Button>New Declaration</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
