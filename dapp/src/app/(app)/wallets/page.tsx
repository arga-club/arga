'use client'

import { useAppKit } from '@reown/appkit/react'
import { useDisconnect } from 'wagmi'
import { Button } from '~/app/_components/ui/button'
import { Prose } from '~/app/_components/ui/prose'
import { trpc } from '~/trpc/react'
import { WalletDisplay } from '~/app/_components/WalletDisplay'
import { useLinkWallet } from '~/hooks/useLinkWallet'
import { sleep } from '~/lib/react-utils'

export default function Page() {
	const { open } = useAppKit()
	const { data: wallets, isInitialLoading } = trpc.wallet.getAll.useQuery()
	const { disconnect } = useDisconnect()
	const addWallet = async () => {
		disconnect()
		await sleep(500)
		await open({ view: 'Connect' })
	}
	useLinkWallet()

	return (
		<div tw='space-y-10'>
			<Prose>
				<h1>Linked Wallets</h1>
				{isInitialLoading ? (
					'loading...'
				) : !wallets?.length ? (
					<>
						<p>No wallets are linked to your account, connect one to get started:</p>
						<Button onClick={() => open({ view: 'Connect' })}>Connect a wallet</Button>
					</>
				) : (
					<>
						<p>The following wallets are linked to your account</p>
						<div tw='space-y-4'>
							{wallets?.map(wallet => <WalletDisplay key={wallet.address} wallet={wallet} />)}
						</div>
						<Button onClick={addWallet} tw='mt-8'>
							Add another wallet
						</Button>
					</>
				)}
			</Prose>
		</div>
	)
}
