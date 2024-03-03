'use client'

import { Button, Card, Container, Flex, Heading, Section, Text, TextArea, TextField } from '@radix-ui/themes'

export default function DeclarationNew() {
	return (
			<Section>
				<Container>
					<Flex direction='column' gap='4' align='center'>
						<Heading as='h1' size='9' align='center' mb='8' weight='regular'>
							Arga
						</Heading>
						<Card size='5' style={{ width: '500px' }}>
							<Flex direction='column' gap='4'>
								<Heading as='h2' size='8' align='center' mb='6' weight='regular'>
									New Declaration
								</Heading>
								<Flex direction='column' gap='1'>
									<Text>Summary</Text>
									<TextField.Input placeholder='lose some fukin weight'></TextField.Input>
								</Flex>
								<Flex direction='column' gap='1'>
									<Text>Description</Text>
									<TextArea placeholder='lose some fukin weight'></TextArea>
								</Flex>
								<Flex direction='column' gap='1'>
									<Text>Actor address</Text>
									<TextField.Input placeholder='0xA1B2C3..'></TextField.Input>
								</Flex>
								<Flex direction='column' gap='1'>
									<Text>Witness address</Text>
									<TextField.Input placeholder='0xA1B2C3..'></TextField.Input>
								</Flex>
								<Flex direction='column' gap='1'>
									<Text>Witness criteria</Text>
									<TextField.Input placeholder='photo evidence of me on a scale'></TextField.Input>
								</Flex>
								<Flex direction='column' gap='1'>
									<Text>End date</Text>
									<TextField.Input placeholder='2024/08/08'></TextField.Input>
								</Flex>
								<Flex direction='column' gap='1'>
									<Text>Witness by date</Text>
									<TextField.Input placeholder='2024/08/08'></TextField.Input>
								</Flex>
								<Flex direction='column' gap='1'>
									<Text>Collateral value (ETH)</Text>
									<TextField.Input placeholder='20 ETH'></TextField.Input>
								</Flex>
								<Button variant='classic' size='3' mt='6'>
									Declare
								</Button>
							</Flex>
						</Card>
					</Flex>
				</Container>
			</Section>
			)
			}

