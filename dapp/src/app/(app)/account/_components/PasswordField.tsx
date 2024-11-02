'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { type inferProcedureOutput } from '@trpc/server'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputWithElement } from '~/app/_components/InputWithElement'
import { Button } from '~/app/_components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '~/app/_components/ui/dialog'
import { FormField, FormItem, FormControl, FormMessage, Form, FormLabel } from '~/app/_components/ui/form'
import { Input } from '~/app/_components/ui/input'
import { Prose } from '~/app/_components/ui/prose'
import { type AppRouter } from '~/server/api/root'
import { trpc } from '~/trpc/react'

const schema = z.object({
	currentPassword: z.string(),
	newPassword: z.string().min(8).max(40),
	newPasswordConfirmation: z.string().min(8).max(40),
})

type User = Exclude<inferProcedureOutput<AppRouter['user']['getCurrent']>, null>

export const PasswordField = ({ user }: { user: User }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const changePasswordMutation = trpc.user.changePassword.useMutation()
	const utils = trpc.useUtils()
	const form = useForm<z.infer<typeof schema>>({
		defaultValues: {
			currentPassword: '',
		},
		resolver: zodResolver(schema),
	})
	const submit = form.handleSubmit(async values => {
		await changePasswordMutation.mutateAsync(values)
		await utils.user.getCurrent.invalidate()
		await utils.user.getCurrent.refetch()
		setIsDialogOpen(false)
		form.reset()
	})

	return (
		<InputWithElement>
			<Input type='password' placeholder='no password set' value={user.password ? 'asdfasdf' : undefined} readOnly />
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogTrigger asChild>
					<Button tw='cursor-pointer'>{user.password ? 'Edit password' : 'Set password'}</Button>
				</DialogTrigger>
				<DialogContent>
					{user.password ? (
						<Form {...form}>
							<form onSubmit={submit} tw='space-y-4'>
								<Prose>
									<h3 tw='m-0'>Edit password:</h3>
								</Prose>
								<FormField
									control={form.control}
									name='currentPassword'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Current password</FormLabel>
											<FormControl>
												<Input type='password' {...field} autoFocus />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='newPassword'
									render={({ field }) => (
										<FormItem>
											<FormLabel>New password</FormLabel>
											<FormControl>
												<Input type='password' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='newPasswordConfirmation'
									render={({ field }) => (
										<FormItem>
											<FormLabel>New password confirmation</FormLabel>
											<FormControl>
												<Input type='password' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type='submit'>Submit →</Button>
							</form>
						</Form>
					) : (
						<Form {...form}>
							<form onSubmit={submit} tw='space-y-4'>
								<Prose>
									<h3 tw='m-0'>Edit password:</h3>
								</Prose>
								<FormField
									control={form.control}
									name='newPassword'
									render={({ field }) => (
										<FormItem>
											<FormLabel>New password</FormLabel>
											<FormControl>
												<Input type='password' {...field} autoFocus />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='newPasswordConfirmation'
									render={({ field }) => (
										<FormItem>
											<FormLabel>New password confirmation</FormLabel>
											<FormControl>
												<Input type='password' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type='submit'>Submit →</Button>
							</form>
						</Form>
					)}
				</DialogContent>
			</Dialog>
		</InputWithElement>
	)
}
