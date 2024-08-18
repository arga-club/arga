/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useRouter } from 'next/navigation'
import styled, { css } from 'styled-components'
import { useAccount, useReconnect, useWriteContract } from 'wagmi'
import { zeroAddress } from 'viem'
import { Prose } from '~/app/_components/ui/prose'
import borderImage from '~/images/border-horz-01.svg'
import { useReadArgaDiamondRedemptionsForParty } from '~/lib/generated'
import { argaInstance, chainId } from '~/lib/wagmi-config'
import { normalizeBigJSON } from '~/lib/ethereum-utils'
import { LazyReactJSON } from '~/lib/react-utils'
import { Button } from '~/app/_components/ui/button'
import { Card, CardContent } from '~/app/_components/ui/card'

export default function Home() {
	const router = useRouter()
	const { open } = useWeb3Modal()
	const { reconnectAsync } = useReconnect()
	const { address, isDisconnected } = useAccount()
	const { writeContractAsync, isLoading: isSigning } = useWriteContract()
	const { data: redemptions, isLoading } = useReadArgaDiamondRedemptionsForParty({
		query: { enabled: !!address },
		args: address ? [address] : undefined,
		chainId,
	})

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
		<>
			<Border $flip tw='-mt-2' />
			<div tw='container'>
				<div tw='pt-16 pb-20 space-y-10'>
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
			</div>
		</>
	)
}

const Border = styled.div<{ $flip?: boolean }>`
	background: url(${borderImage.src});
	background-size: ${borderImage.width / 3}px ${borderImage.height / 3}px;
	height: ${borderImage.height / 3}px;
	${({ $flip }) =>
		$flip &&
		css`
			transform: scaleY(-1);
		`}
`
