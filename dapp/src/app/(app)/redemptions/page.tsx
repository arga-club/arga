'use client'

import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { useRouter } from 'next/navigation'
import { useWriteContract } from 'wagmi'
import { zeroAddress } from 'viem'
import { Prose } from '~/app/_components/ui/prose'
import { useReadArgaDiamondRedemptionsForParty, useReadArgaDiamondPool } from '~/lib/generated'
import { chainId } from '~/lib/wagmi-config'
import { normalizeBigJSON } from '~/lib/ethereum-utils'
import { LazyReactJSON } from '~/lib/react-utils'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent } from '~/app/_components/ui/card'
import { argaInstance } from '~/lib/arga-utils'

export default function Home() {
	const router = useRouter()
	const { open } = useAppKit()
	const { address, isConnected } = useAppKitAccount()
	const { writeContractAsync, isLoading: isSigning } = useWriteContract()
	const { data: redemptions, isLoading } = useReadArgaDiamondRedemptionsForParty({
		query: { enabled: !!address },
		args: address as `0x${string}` ? [address as `0x${string}`] : undefined,
		chainId,
	})
	useReadArgaDiamondPool({ chainId })

	const redeem = async () => {
		!isConnected && (await open())
		if (!address) return
		await writeContractAsync({
			...argaInstance,
			functionName: 'redeem',
			args: [address as `0x${string}`, [zeroAddress]],
		})
		router.push('/declarations')
	}

	return (
		<div tw='space-y-10'>
			<Prose>
				<h1>Redemptions</h1>
			</Prose>
			<Card className='max-w-screen-sm'>
				{isLoading ? (
					<CardContent className='space-y-6 pt-8'>Loading..</CardContent>
				) : isSigning ? (
					<CardContent className='space-y-6 pt-8'>Signing...</CardContent>
				) : !redemptions?.length ? (
					<CardContent className='space-y-6 pt-8'>No redemptions..</CardContent>
				) : (
					<CardContent className='space-y-6 pt-8'>
						<LazyReactJSON src={normalizeBigJSON(redemptions)} name='redemptions' />
					</CardContent>
				)}
			</Card>
			<Button onClick={redeem}>Redeem</Button>
		</div>
	)
}
