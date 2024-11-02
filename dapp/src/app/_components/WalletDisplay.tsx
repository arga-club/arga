import Image from 'next/image'
import { WalletIcon } from 'lucide-react'
import { Addreth } from 'addreth'
import { type Wallet } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Button } from '~/app/_components/ui/button'
import { trpc } from '~/trpc/react'
import { Dialog, DialogContent, DialogTrigger } from '~/app/_components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '~/app/_components/ui/form'
import { Prose } from '~/app/_components/ui/prose'
import { Input } from '~/app/_components/ui/input'

const labelFormSchema = z.object({
	label: z.string(),
})

export const WalletDisplay = ({ wallet, className, key }: { wallet: Wallet; className?: string; key?: string }) => {
	const removeWalletMutation = trpc.wallet.remove.useMutation()
	const utils = trpc.useUtils()
	const removeWallet = async () => {
		await removeWalletMutation.mutateAsync({ id: wallet.id })
		await utils.wallet.getAll.invalidate()
	}

	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const editLabelMutation = trpc.wallet.editLabel.useMutation()
	const labelForm = useForm<z.infer<typeof labelFormSchema>>({
		defaultValues: {
			label: wallet.label ?? '',
		},
		resolver: zodResolver(labelFormSchema),
	})
	const submitProof = labelForm.handleSubmit(async ({ label }) => {
		await editLabelMutation.mutateAsync({ id: wallet.id, label })
		await utils.wallet.getAll.invalidate()
		setIsDialogOpen(false)
	})

	return (
		<div className={className} key={key} tw='border-[1px] border-gray-200 rounded-lg p-4'>
			<div tw='flex justify-between items-center gap-4'>
				<div tw='flex items-center gap-4'>
					{wallet.icon ? (
						<Image src={wallet.icon} width='56' height='56' alt='' tw='m-0 p-2' />
					) : (
						<WalletIcon size='40' />
					)}
					<div>
						<div tw='-mb-2'>
							<Addreth
								address={wallet.address}
								label={() => wallet.label || wallet.address}
								theme='simple-light'
							/>
						</div>
						<p tw='m-0 text-secondary'>{wallet.name}</p>
					</div>
				</div>
				<div tw='flex space-x-4'>
					<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
						<DialogTrigger asChild>
							<Button variant='outline' tw='cursor-pointer'>
								Edit label
							</Button>
						</DialogTrigger>
						<DialogContent tw='w-min'>
							<Form {...labelForm}>
								<form onSubmit={submitProof} tw='space-y-4'>
									<Prose>
										<h3 tw='m-0'>Wallet label:</h3>
									</Prose>
									<FormField
										control={labelForm.control}
										name='label'
										render={({ field }) => (
											<FormItem>
												<FormDescription>
													Enter a descriptive label for your wallet address {wallet.address}
												</FormDescription>
												<FormControl>
													<Input placeholder='my special wallet' {...field} autoFocus />
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
					<Button onClick={removeWallet} variant='outline' tw='cursor-pointer'>
						Unlink
					</Button>
				</div>
			</div>
		</div>
	)
}
