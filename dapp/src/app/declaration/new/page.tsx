'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import styled from 'styled-components'
import tw from 'twin.macro'
import { z } from 'zod'
import { format } from 'date-fns'
import { CalendarIcon } from '@radix-ui/react-icons'
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

const formSchema = z.object({
	summary: z.string().min(2).max(50),
	description: z.string().min(2).max(50),
	actorAddress: z.string().min(2).max(50),
	witnessAddress: z.string().min(2).max(50),
	witnessCriteria: z.string().min(2).max(50),
	endDate: z.date(),
	witnessByDate: z.date(),
	collateralValue: z.coerce.number(),
})

export default function DeclarationNew() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			summary: '',
		},
	})

	const submit = form.handleSubmit(values => {
		console.debug('submit', values)
	})
	return (
		<div tw='container'>
			<div tw='px-3 pt-16'>
				<PageHeading>New Declaration</PageHeading>
				<Card className='mx-auto max-w-screen-sm'>
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
												<Input placeholder='lose some fukin weight' {...field} />
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
												Additional details about what you intend to do, how you'll do it, and what success
												looks like
											</FormDescription>
											<FormControl>
												<Textarea placeholder='at least 20 kgs' {...field} />
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
												<Input placeholder='0xA1B2C3..' {...field} />
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
												<Input placeholder='0xA1B2C3..' {...field} />
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
												<Input placeholder='photo evidence of me on a scale' {...field} />
											</FormControl>
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
				</Card>
			</div>
		</div>
	)
}

const PageHeading = styled.h1`
	${tw`text-3xl pb-10`}
`
