'use client'

import { formatISO } from 'date-fns'
import Link from 'next/link'
import { type Ref } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { formatEther } from 'viem'
import { useAccount } from 'wagmi'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/app/_components/ui/card'
import { Prose } from '~/app/_components/ui/prose'
import { withDisplayName } from '~/app/_components/withDisplayName'
import { declarationStatusClasses, declarationStatusLabels } from '~/lib/arga-utils'
import { type Declaration } from '~/types/arga'

export const DeclarationCard = withDisplayName(
	'DeclarationCard',
	(
		{
			declaration,
		}: {
			declaration: Declaration
		},
		ref: Ref<HTMLDivElement>,
	) => {
		const { address } = useAccount()
		return (
			<Card ref={ref}>
				<CardHeader>
					<Prose>
						{!!address && declaration.actor === address && <Badge>Acting!</Badge>}
						{!!address && declaration.witness === address && <Badge>Witnessing!</Badge>}
						<h2 tw='m-0'>{declaration.summary}</h2>
					</Prose>
				</CardHeader>
				<CardContent>
					<Prose>
						<p tw='space-x-10 text-secondary mt-0'>
							<span>Collateral: {formatEther(declaration.collateral.value)} ETH</span>
							<span>
								End date:&nbsp;
								{formatISO(new Date(Number(declaration.endDate)), {
									representation: 'date',
								})}
							</span>
							<span>
								Status:&nbsp;
								<span className={declarationStatusClasses[declaration.status]}>
									{declarationStatusLabels[declaration.status]}
								</span>
							</span>
						</p>
						<p tw='whitespace-pre-line'>{declaration.description}</p>
					</Prose>
				</CardContent>
				<CardFooter>
					<Link href={`/declarations/${declaration.id}`}>
						<Button>View declaration →</Button>
					</Link>
				</CardFooter>
			</Card>
		)
	},
)

const Badge = styled.p`
	position: absolute;
	${tw`bg-red-600 text-white shadow-lg text-sm`}
	${tw`-top-7 -right-3 px-3 py-1 rounded-md`}
`
