'use client'

import { Addreth } from 'addreth'
import { formatISO } from 'date-fns'
import Link from 'next/link'
import { type Ref } from 'react'
import { formatEther } from 'viem'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/app/_components/ui/card'
import { Prose } from '~/app/_components/ui/prose'
import { withDisplayName } from '~/app/_components/withDisplayName'
import { declarationStatusClasses, declarationStatusLabels } from '~/lib/arga-utils'
import { trpc } from '~/trpc/react'
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
		const { data: wallets } = trpc.wallet.getAll.useQuery()

		const addresses = wallets?.map(wallet => wallet.address) ?? []

		return (
			<div tw='space-y-2'>
				{wallets && addresses.includes(declaration.actor) && addresses.includes(declaration.witness) ? (
					<div tw='flex items-center space-x-2'>
						<p tw='text-sm'>Acting and witnessing as</p>
						<div tw='pt-1'>
							<Addreth
								address={declaration.actor}
								label={(address: string) =>
									wallets.find(wallet => wallet.address === declaration.actor)?.label || address
								}
								theme='simple-light'
								actions='none'
							/>
						</div>
					</div>
				) : wallets && addresses.includes(declaration.actor) ? (
					<div tw='flex items-center space-x-2'>
						<p tw='text-sm'>Acting as</p>
						<div tw='pt-1'>
							<Addreth
								address={declaration.actor}
								label={(address: string) =>
									wallets.find(wallet => wallet.address === declaration.actor)?.label || address
								}
								theme='simple-light'
								actions='none'
							/>
						</div>
					</div>
				) : wallets && addresses.includes(declaration.witness) ? (
					<div tw='flex items-center space-x-2'>
						<p tw='text-sm'>Witnessing as</p>
						<div tw='pt-1'>
							<Addreth
								address={declaration.witness}
								label={(address: string) =>
									wallets.find(wallet => wallet.address === declaration.witness)?.label || address
								}
								theme='simple-light'
								actions='none'
							/>
						</div>
					</div>
				) : null}
				<Card ref={ref}>
					<CardHeader>
						<Prose>
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
			</div>
		)
	},
)
