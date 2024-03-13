'use client'

import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter } from '~/app/_components/ui/card'

export default function Home() {
	return (
		<div tw='container'>
			<div tw='px-3 pt-16'>
				<PageHeading>Declarations</PageHeading>
				<Card>
					<CardContent className='pt-8'>No declarations..</CardContent>
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
