'use client'

import { Button, Card, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Link from 'next/link'
import styled from 'styled-components'

export default function Home() {
	return (
		<Root>
			<Section>
				<Container>
					<Flex direction='column' gap='4' align='center'>
						<Heading as='h1' size='9' align='center' mb='8' weight='regular'>
							Arga
						</Heading>
						<Card size='5' style={{ width: '500px' }}>
							<Flex direction='column' gap='4'>
								<Heading as='h2' size='8' align='center' mb='6' weight='regular'>
									Declarations
								</Heading>
								<Text>No Declarations</Text>
								<Link href='/declaration/new'>
									<Button variant='classic' size='3' mt='6'>
										New Declaration
									</Button>
								</Link>
							</Flex>
						</Card>
					</Flex>
				</Container>
			</Section>
		</Root>
	)
}

const Root = styled.div`
	// background: url('https://images.unsplash.com/photo-1597011652683-a9cec37b3bc8?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
	// background-position: center center;
	min-height: 80vh;
	background: linear-gradient(0deg, #3457d5, white);
`
