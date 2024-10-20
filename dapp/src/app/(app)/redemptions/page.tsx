/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import { useAppKit } from '@reown/appkit/react';
import { useRouter } from 'next/navigation'
import { useAccount, useReconnect, useWriteContract } from 'wagmi'
import { zeroAddress } from 'viem'
import { useEffect } from 'react'
import { Prose } from '~/app/_components/ui/prose'
import { useReadArgaDiamondRedemptionsForParty, useReadArgaDiamondPool } from '~/lib/generated'
import { argaInstance, chainId } from '~/lib/wagmi-config'
import { normalizeBigJSON } from '~/lib/ethereum-utils'
import { LazyReactJSON } from '~/lib/react-utils'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent } from '~/app/_components/ui/card'

export default function Home() {
	const router = useRouter()
	const { open } = useAppKit()
	const { reconnectAsync } = useReconnect()
	const { address, isDisconnected } = useAccount()
	const { writeContractAsync, isLoading: isSigning } = useWriteContract()
	const { data: redemptions, isLoading } = useReadArgaDiamondRedemptionsForParty({
		query: { enabled: !!address },
		args: address ? [address] : undefined,
		chainId,
	})
	useReadArgaDiamondPool({ chainId })

	useEffect(() => {
		if (!address) return
		void writeContractAsync({
			...argaInstance,
			functionName: 'changeWinMultiplier',
			args: [100n],
		})
	}, [address, writeContractAsync])

	const redeem = async () => {
		isDisconnected && (await open())
		await reconnectAsync()
		if (!address) return
		await writeContractAsync({
			...argaInstance,
			functionName: 'redeem',
			args: [address, [zeroAddress]],
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
