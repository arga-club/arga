/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import styled from 'styled-components'
import tw from 'twin.macro'
import { z } from 'zod'
import { format } from 'date-fns'
import { CalendarIcon } from '@radix-ui/react-icons'
import { useAccount, useConnect, useConnectors, useReconnect } from 'wagmi'
import { useRouter } from 'next/navigation'
import { useAppKit } from '@reown/appkit/react'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent, CardFooter } from '~/app/_components/ui/card'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '~/app/_components/ui/form'
import { Input } from '~/app/_components/ui/input'
import { Textarea } from '~/app/_components/ui/textarea'
import { Popover, PopoverContent, PopoverTrigger } from '~/app/_components/ui/popover'
import { cn } from '~/lib/shadcn-utils'
import { Calendar } from '~/app/_components/ui/calendar'
import { useWriteArgaDiamondDeclareWithEther } from '~/lib/generated'
import { bigIntDateSchema, ethAddressSchema, ethValueSchema } from '~/lib/validation-utils'
import { chainId } from '~/lib/wagmi-config'
import { Prose } from '~/app/_components/ui/prose'

const formSchema = z.object({
	summary: z.string().min(2).max(50),
	description: z.string().min(2).max(250),
	actorAddress: ethAddressSchema,
	witnessAddress: ethAddressSchema,
	witnessCriteria: z.string().min(2).max(100),
	startDate: z.date(),
	endDate: z.date(),
	witnessByDate: z.date(),
	collateralValue: z.coerce.number(),
})

export default function DeclarationNew() {
	const router = useRouter()
	const { open } = useAppKit()
	const { reconnectAsync } = useReconnect()
	const { address, isDisconnected } = useAccount()
	const { writeContractAsync, isLoading } = useWriteArgaDiamondDeclareWithEther()

	const form = useForm<z.infer<typeof formSchema>>({
		mode: 'onSubmit',
		resolver: zodResolver(formSchema),
		defaultValues: {
			summary: '',
			description: '',
			actorAddress: '0x',
			witnessAddress: '0x',
			witnessCriteria: '',
		},
	})

	const submit = form.handleSubmit(async declaration => {
		isDisconnected && (await open())
		await reconnectAsync()
		await writeContractAsync({
			chainId,
			args: [
				declaration.summary,
				declaration.description,
				declaration.actorAddress,
				declaration.witnessAddress,
				bigIntDateSchema.parse(declaration.startDate),
				bigIntDateSchema.parse(declaration.endDate),
				bigIntDateSchema.parse(declaration.witnessByDate),
			],
			value: ethValueSchema.parse(declaration.collateralValue),
		})
		router.push('/declarations')
	})

	const { connect } = useConnect()
	const connectors = useConnectors()
	const setMyAddress = async ({ fieldName }: { fieldName: keyof z.infer<typeof formSchema> }) => {
		console.log('reconnectAsync')
		await connect({
			connector: connectors[0],
		})
		await reconnectAsync()
		form.setValue(fieldName, '')
	}

	return (
		<>
			<Prose>
				<h1>New Declaration</h1>
			</Prose>
			<w3m-button/>
			<Card>
				{isLoading ? (
					<CardContent className='space-y-6 pt-8'>Signing...</CardContent>
				) : (
					<Form {...form}>
						<form onSubmit={submit}>
							<CardContent className='space-y-6 pt-8'>
								<FormField
									control={form.control}
									name='summary'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Summary</FormLabel>
											<FormDescription>Brief summary of your declaration</FormDescription>
											<FormControl>
												<Input placeholder='lose 5kg' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='description'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Description</FormLabel>
											<FormDescription>
												Additional details about what you intend to do, how you&apos;ll do it, and what
												success looks like
											</FormDescription>
											<FormControl>
												<Textarea
													placeholder='go to the gym, do cardio on a regular basis, change eating habits'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='actorAddress'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Actor address</FormLabel>
											<FormDescription>Address of person carrying out declaration</FormDescription>
											<FormControl>
												<InputWithButtonWrapper>
													<Input placeholder='0xA1B2C3..' {...field} />
													<Button onClick={() => setMyAddress({ fieldName: field.name })}>
														use my address
													</Button>
												</InputWithButtonWrapper>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='witnessAddress'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Witness address</FormLabel>
											<FormDescription>Address of person witnessing declaration</FormDescription>
											<FormControl>
												<InputWithButtonWrapper>
													<Input placeholder='0xA1B2C3..' {...field} />
													<Button
														onClick={async () => {
															if (!address) return
															form.setValue(field.name, address)
														}}
													>
														use my address
													</Button>
												</InputWithButtonWrapper>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='witnessCriteria'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Witness criteria</FormLabel>
											<FormDescription>How will the witness judge success?</FormDescription>
											<FormControl>
												<Input placeholder='photo evidence of me on a scale before and after' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='startDate'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Start date</FormLabel>
											<FormDescription>When will declaration be started?</FormDescription>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={'outline'}
															className={cn(
																'w-[240px] pl-3 text-left font-normal',
																!field.value && 'text-muted-foreground',
															)}
														>
															{field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
															<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className='w-auto p-0' align='start'>
													<Calendar
														mode='single'
														selected={field.value}
														onSelect={field.onChange}
														disabled={date => date < new Date() || date < new Date('1900-01-01')}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='endDate'
									render={({ field }) => (
										<FormItem>
											<FormLabel>End date</FormLabel>
											<FormDescription>When will declaration be finished?</FormDescription>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={'outline'}
															className={cn(
																'w-[240px] pl-3 text-left font-normal',
																!field.value && 'text-muted-foreground',
															)}
														>
															{field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
															<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className='w-auto p-0' align='start'>
													<Calendar
														mode='single'
														selected={field.value}
														onSelect={field.onChange}
														disabled={date => date < new Date() || date < new Date('1900-01-01')}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='witnessByDate'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Witness by date</FormLabel>
											<FormDescription>When will declaration be witnessed by?</FormDescription>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={'outline'}
															className={cn(
																'w-[240px] pl-3 text-left font-normal',
																!field.value && 'text-muted-foreground',
															)}
														>
															{field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
															<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className='w-auto p-0' align='start'>
													<Calendar
														mode='single'
														selected={field.value}
														onSelect={field.onChange}
														disabled={date => date < new Date() || date < new Date('1900-01-01')}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='collateralValue'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Collateral value</FormLabel>
											<FormDescription>Amount in ETH</FormDescription>
											<FormControl>
												<Input placeholder='12 ETH' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
							<CardFooter>
								<Button type='submit'>Declare</Button>
							</CardFooter>
						</form>
					</Form>
				)}
			</Card>
		</>
	)
}

const InputWithButtonWrapper = styled.div`
	${tw`flex space-x-4`}
	> input {
		flex: 1 1 auto;
	}
	> button {
		flex: 0 0 auto;
	}
`
