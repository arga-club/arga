/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import ActorDeclarations from '~/app/_components/data/actor-declarations'
import CommunityDeclarations from '~/app/_components/data/community-declarations'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent } from '~/app/_components/ui/card'
import { Prose } from '~/app/_components/ui/prose'
import borderImage from '~/images/border-horz-01.svg'
import { normalizeBigJSON } from '~/lib/ethereum-utils'
import { useReadArgaDiamondPool } from '~/lib/generated'
import { LazyReactJSON } from '~/lib/react-utils'
import { chainId } from '~/lib/wagmi-config'

export default function Home() {
	const { data: pool } = useReadArgaDiamondPool({ chainId })
	return (
		<>
			<Border $flip tw='-mt-2' />
			<div tw='container'>
				<div tw='md:flex md:flex-row-reverse md:gap-10'>
					{/* pool */}
					<div tw='pt-16 pb-20 space-y-10'>
						<Prose>
							<h1>Pool</h1>
							<p>
								When a declaration is rejected by its witness, its collateral is sent to this pool instead of
								returned to the user. All actors concluding a declaration when assets are in the pool have a
								chance to win those assets.
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
						<Prose>
							<h1>My declarations</h1>
						</Prose>
						<ActorDeclarations />
						<Link tw='block' href='/declarations/new'>
							<Button>New Declaration</Button>
						</Link>
					</div>
					<div tw='pt-16 pb-20 space-y-10'>
						<Prose>
							<h1>Community declarations</h1>
						</Prose>
						<CommunityDeclarations />
					</div>
				</div>
			</div>
		</>
	)
}

const Border = styled.div<{ $flip?: boolean }>`
	background: url(${borderImage.src});
	background-size: ${borderImage.width / 3}px ${borderImage.height / 3}px;
	height: ${borderImage.height / 3}px;
	${({ $flip }) =>
		$flip &&
		css`
			transform: scaleY(-1);
		`}
`
