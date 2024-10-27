'use client'

import { useEffect, useState } from 'react'
import { Addreth } from 'addreth'
import { readArgaDiamondWitnessDeclarations } from '~/lib/generated'
import { chainId, wagmiCoreConfig } from '~/lib/wagmi-config'
import { DeclarationCard } from '~/app/_components/DeclarationCard'
import { useCurrentUser } from '~/hooks/useCurrentUser'
import { type Declaration } from '~/types/arga'

export default function WitnessingDeclarations() {
	const { user } = useCurrentUser()
	const [declarations, setDeclarations] = useState([] as Declaration[])
	useEffect(() => {
		if (!user) return
		void Promise.all(
			user.wallets.map(wallet =>
				readArgaDiamondWitnessDeclarations(wagmiCoreConfig, {
					args: [wallet.address as `0x${string}`],
					chainId,
				}),
			),
		).then(declarations => {
			setDeclarations(declarations.flat().flat())
		})
	}, [user])

	return (
		<div tw='space-y-8'>
			{!declarations?.length ? (
				'No declarations..'
			) : (
				<>
					{declarations
						?.slice()
						.reverse()
						.map(declaration => (
							<>
								<div tw='space-y-2'>
									<div tw='flex items-center space-x-2'>
										<p tw='text-sm'>Witnessing as</p>
										<div tw='pt-1'>
											<Addreth address={declaration.witness} theme='simple-light' actions='none' />
										</div>
									</div>
									<DeclarationCard key={declaration.id} declaration={declaration} />
								</div>
							</>
						))}
				</>
			)}
		</div>
	)
}
