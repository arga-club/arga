'use client'

import { useEffect, useState } from 'react'
import { readArgaDiamondActorDeclarations } from '~/lib/generated'
import { chainId, wagmiCoreConfig } from '~/lib/wagmi-config'
import { DeclarationCard } from '~/app/_components/DeclarationCard'
import { type Declaration } from '~/types/arga'
import { trpc } from '~/trpc/react'

export default function ActingDeclarations() {
	const { data: wallets } = trpc.wallet.getAll.useQuery()
	const [declarations, setDeclarations] = useState([] as Declaration[])
	useEffect(() => {
		if (!wallets) return
		void Promise.all(
			wallets.map(wallet =>
				readArgaDiamondActorDeclarations(wagmiCoreConfig, {
					args: [wallet.address as `0x${string}`],
					chainId,
				}),
			),
		).then(declarations => {
			setDeclarations(declarations.flat().flat())
		})
	}, [wallets])

	return (
		<div tw='space-y-8'>
			{!declarations?.length ? (
				'No declarations..'
			) : (
				<>
					{declarations
						?.slice()
						.reverse()
						.map(declaration => <DeclarationCard key={declaration.id} declaration={declaration} />)}
				</>
			)}
		</div>
	)
}
