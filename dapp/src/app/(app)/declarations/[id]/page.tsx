'use client'

import { useAccount, useReconnect, useWriteContract } from 'wagmi'
import { z } from 'zod'
import { useAppKit } from '@reown/appkit/react'
import { useRouter } from 'next/navigation'
import { formatISO } from 'date-fns'
import { formatEther } from 'viem'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '~/app/_components/ui/card'
import { useReadArgaDiamondDraw, useReadArgaDiamondGetDeclaration } from '~/lib/generated'
import { useAutoReconnect } from '~/lib/react-utils'
import { chainId } from '~/lib/wagmi-config'
import { Prose } from '~/app/_components/ui/prose'
import { randomNumberForDraw } from '~/lib/ethereum-utils'
import { argaInstance, declarationStatus, declarationStatusClasses, declarationStatusLabels } from '~/lib/arga-utils'
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/app/_components/ui/form'
import { Textarea } from '~/app/_components/ui/textarea'

const proofFormSchema = z.object({
	proof: z.string(),
})

export default function Declaration({ params }: { params: { id: string } }) {
	const router = useRouter()
	useAutoReconnect()
	const { open } = useAppKit()
	const { reconnectAsync } = useReconnect()
	const { address, isDisconnected } = useAccount()
	const { writeContractAsync, isLoading } = useWriteContract()

	const { isInitialLoading, data: declaration } = useReadArgaDiamondGetDeclaration({
		args: [BigInt(params.id)],
		chainId,
	})
	useReadArgaDiamondDraw({
		query: { enabled: !!declaration },
		args: [BigInt(declaration?.drawId ?? 0)],
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
		<>
			<div tw='space-y-10'>
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
							<Prose>
								<h1 tw='mt-0'>{declaration.summary}</h1>
							</Prose>
							<Prose>
								<p tw='whitespace-pre-line'>{declaration.description}</p>
								<p tw='text-secondary mt-0'>
									Collateral: {formatEther(declaration.collateral.value)} ETH
									<br />
									Status:&nbsp;
									<span className={declarationStatusClasses[declaration.status]}>
										{declarationStatusLabels[declaration.status]}
									</span>
									<br />
									Proof:&nbsp;
									{declaration.proof}
									<br />
									Start date:&nbsp;
									{formatISO(new Date(Number(declaration.startDate)), {
										representation: 'date',
									})}
									<br />
									End date:&nbsp;
									{formatISO(new Date(Number(declaration.endDate)), {
										representation: 'date',
									})}
									<br />
									Witness by date:&nbsp;
									{formatISO(new Date(Number(declaration.witnessByDate)), {
										representation: 'date',
									})}
									<br />
									Actor: {declaration.actor}
									<br />
									Witness: {declaration.witness}
									<br />
								</p>
							</Prose>
							{isDisconnected ? (
								<w3m-button />
							) : address === declaration.actor && declaration.status === declarationStatus.active ? (
								<Form {...proofForm}>
									<form onSubmit={submitProof} tw='space-y-4'>
										<Card>
											<CardHeader>
												<Prose>
													<h3 tw='m-0'>proof:</h3>
												</Prose>
											</CardHeader>
											<CardContent>
												<FormField
													control={proofForm.control}
													name='proof'
													render={({ field }) => (
														<FormItem>
															<FormControl>
																<Textarea placeholder='description of or link to proof' {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</CardContent>
											<CardFooter>
												<Button type='submit'>Submit →</Button>
											</CardFooter>
										</Card>
									</form>
								</Form>
							) : address === declaration.witness && declaration.status === declarationStatus.proofSubmitted ? (
								<div tw='space-x-4'>
									<Button onClick={witnessApprove}>Witness (approve)</Button>
									<Button onClick={witnessReject}>Witness (reject)</Button>
								</div>
							) : null}
						</>
					)}
				</div>
			</div>
		</>
	)
}
