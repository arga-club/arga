'use client'

import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useAccount, useReadContract } from 'wagmi'
import { hardhat } from 'wagmi/chains'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent } from '~/app/_components/ui/card'
import { argaAbi } from '~/lib/generated'

export default function Home() {
	const { address, isConnecting } = useAccount()

	const { isInitialLoading, data: actorDeclarations } = useReadContract({
		query: { enabled: !!address },
		abi: argaAbi,
		address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
		functionName: 'actorDeclarations',
		args: address ? [address] : undefined,
		chainId: hardhat.id,
	})

	return (
		<div tw='container'>
			<div tw='px-3 pt-16 pb-20 space-y-10'>
				<PageHeading>Declarations</PageHeading>
				<div>
					{isInitialLoading
						? 'Loading..'
						: isConnecting
							? 'Connecting..'
							: !actorDeclarations?.length
								? 'No declarations..'
								: actorDeclarations?.map(declaration => {
										return (
											<Card key={declaration.id}>
												<CardContent>{declaration.summary}</CardContent>
											</Card>
										)
									})}
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
