'use client'

import styled from 'styled-components'
import tw from 'twin.macro'
import { useAccount, useReconnect, useWriteContract } from 'wagmi'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useRouter } from 'next/navigation'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/app/_components/ui/card'
import { useReadArgaDiamondGetDeclaration } from '~/lib/generated'
import { normalizeBigJSON, randomNumberForDraw } from '~/lib/ethereum-utils'
import { LazyReactJSON, useAutoReconnect } from '~/lib/react-utils'
import { declarationStatus } from '~/types/arga'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/app/_components/ui/form'
import { Textarea } from '~/app/_components/ui/textarea'
import { argaInstance, chainId } from '~/lib/wagmi-config'

const proofFormSchema = z.object({
	proof: z.string(),
})

export default function Declaration({ params }: { params: { id: string } }) {
	const router = useRouter()
	useAutoReconnect()
	const { open } = useWeb3Modal()
	const { reconnectAsync } = useReconnect()
	const { address, isDisconnected } = useAccount()
	const { writeContractAsync, isLoading } = useWriteContract()

	const { isInitialLoading, data: declaration } = useReadArgaDiamondGetDeclaration({
		args: [BigInt(params.id)],
		chainId,
	})

	const proofForm = useForm<z.infer<typeof proofFormSchema>>({
		resolver: zodResolver(proofFormSchema),
	})

	const submitProof = proofForm.handleSubmit(async declaration => {
		isDisconnected && (await open())
		await reconnectAsync()
		await writeContractAsync({
			...argaInstance,
			functionName: 'submitDeclarationProof',
			args: [BigInt(params.id), declaration.proof],
		})
		router.push('/declarations')
	})

	const witnessApprove = async () => {
		isDisconnected && (await open())
		await reconnectAsync()
		await writeContractAsync({
			...argaInstance,
			functionName: 'concludeDeclarationWithApproval',
			args: [BigInt(params.id), randomNumberForDraw()],
		})
		router.push('/declarations')
	}
	const witnessReject = async () => {
		isDisconnected && (await open())
		await reconnectAsync()
		await writeContractAsync({
			...argaInstance,
			functionName: 'concludeDeclarationWithRejection',
			args: [BigInt(params.id), randomNumberForDraw()],
		})
		router.push('/declarations')
	}

	return (
		<div tw='container'>
			<div tw='px-3 pt-16 pb-20 space-y-10'>
				<PageHeading>Declaration</PageHeading>
				<div>
					{isInitialLoading ? (
						'Loading..'
					) : !declaration ? (
						'Declaration not found..'
					) : isLoading ? (
						<Card>
							<CardContent className='space-y-6 pt-8'>Signing...</CardContent>
						</Card>
					) : (
						<>
							<Card>
								<CardHeader>{declaration.summary}</CardHeader>
								<CardContent>
									<LazyReactJSON src={normalizeBigJSON(declaration)} name='declaration' />
								</CardContent>
								<CardFooter>
									{isDisconnected ? (
										'connect wallet to interact'
									) : address === declaration.actor && declaration.status === declarationStatus.active ? (
										<>
											<Form {...proofForm}>
												<form onSubmit={submitProof} tw='space-y-4'>
													<FormField
														control={proofForm.control}
														name='proof'
														render={({ field }) => (
															<FormItem>
																<FormLabel>Proof</FormLabel>
																<FormControl>
																	<Textarea placeholder='description of or link to proof' {...field} />
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
													<Button type='submit'>Submit proof</Button>
												</form>
											</Form>
										</>
									) : address === declaration.witness &&
									  declaration.status === declarationStatus.proofSubmitted ? (
										<div tw='space-x-4'>
											<Button onClick={witnessApprove}>Witness (approve)</Button>
											<Button onClick={witnessReject}>Witness (reject)</Button>
										</div>
									) : null}
								</CardFooter>
							</Card>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

const PageHeading = styled.h1`
	${tw`text-3xl pb-10`}
`
