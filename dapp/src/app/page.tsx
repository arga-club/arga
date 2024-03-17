'use client'

import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useReadContract } from 'wagmi'
import { hardhat } from 'wagmi/chains'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter } from '~/app/_components/ui/card'
import { argaAbi } from '~/lib/generated'

export default function Home() {
	const { isInitialLoading, data } = useReadContract({
		abi: argaAbi,
		address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
		functionName: 'actorDeclarations',
		args: ['0x70997970C51812dc3A010C7d01b50e0d17dc79C8'],
		chainId: hardhat.id,
	})
	return (
		<div tw='container'>
			<div tw='px-3 pt-16'>
				<PageHeading>Declarations</PageHeading>
				<Card>
					<CardContent className='pt-8'>
						{isInitialLoading
							? 'Loading..'
							: !data?.length
								? 'No declarations..'
								: data?.map(declaration => {
										return (
											<Card key={declaration.id}>
												<CardContent>{declaration.summary}</CardContent>
											</Card>
										)
									})}
					</CardContent>
					<CardFooter>
						<Link href='/declaration/new'>
							<Button>New Declaration</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}

const PageHeading = styled.h1`
	${tw`text-3xl pb-10`}
`
