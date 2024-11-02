'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { type inferProcedureOutput } from '@trpc/server'
import { InputWithElement } from '~/app/_components/InputWithElement'
import { Button } from '~/app/_components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '~/app/_components/ui/dialog'
import { FormField, FormItem, FormDescription, FormControl, FormMessage, Form } from '~/app/_components/ui/form'
import { Input } from '~/app/_components/ui/input'
import { Prose } from '~/app/_components/ui/prose'
import { trpc } from '~/trpc/react'
import { type AppRouter } from '~/server/api/root'

const schema = z.object({
	email: z.string().email(),
})

type User = Exclude<inferProcedureOutput<AppRouter['user']['getCurrent']>, null>

export const EmailField = ({ user }: { user: User }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const changeEmailMutation = trpc.user.changeEmail.useMutation()
	const utils = trpc.useUtils()
	const form = useForm<z.infer<typeof schema>>({
		defaultValues: async () => {
			const data = await utils.user.getCurrent.fetch()
			return {
				email: data?.email ?? '',
			}
		},
		resolver: zodResolver(schema),
	})
	const submit = form.handleSubmit(async ({ email }) => {
		await changeEmailMutation.mutateAsync({ email })
		await utils.user.getCurrent.invalidate()
		await utils.user.getCurrent.refetch()
		setIsDialogOpen(false)
		form.reset()
	})

	return (
		<InputWithElement>
			<Input placeholder='no email registered' value={user.email ?? ''} readOnly />
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogTrigger asChild>
					<Button tw='cursor-pointer'>Edit email</Button>
				</DialogTrigger>
				<DialogContent>
					<Form {...form}>
						<form onSubmit={submit} tw='space-y-4'>
							<Prose>
								<h3 tw='m-0'>Wallet email:</h3>
							</Prose>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormDescription>Enter your new email address</FormDescription>
										<FormControl>
											<Input placeholder='riches@patricians.ro' {...field} autoFocus />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit'>Update →</Button>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</InputWithElement>
	)
}
