import Image from 'next/image'
import { WalletIcon } from 'lucide-react'
import { type Wallet } from '~/types/auth'

export const WalletDisplay = ({ wallet, className, key }: { wallet: Wallet; className?: string; key?: string }) => {
	return (
		<div className={className} key={key} tw='border-[1px] border-gray-200 rounded-lg p-4'>
			<div tw='flex items-start gap-4'>
				{wallet.icon ? (
					<Image src={wallet.icon} width='56' height='56' alt='' tw='m-0 p-2' />
				) : (
					<WalletIcon size='40' />
				)}
				<div tw='space-y-6'>
					<p tw='m-0'>
						{wallet.address}
						<br /> <span tw='text-secondary'>{wallet.name}</span>{' '}
					</p>
				</div>
			</div>
		</div>
	)
}
