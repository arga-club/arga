'use client'

import { useAppKitAccount } from '@reown/appkit/react'
import { useReadArgaDiamondActorDeclarations } from '~/lib/generated'
import { chainId } from '~/lib/wagmi-config'
import { DeclarationCard } from '~/app/_components/DeclarationCard'

export default function WitnessingDeclarations() {
	const { address, isConnected } = useAppKitAccount()
	const { isInitialLoading: isWitnessDeclarationsInitialLoading, data: witnessDeclarations } =
		useReadArgaDiamondActorDeclarations({
			query: { enabled: !!address },
			args: address ? ([address] as [`0x${string}`]) : undefined,
			chainId,
		})

	return (
		<div tw='space-y-8'>
			{isWitnessDeclarationsInitialLoading ? (
				'Loading..'
			) : !isConnected ? (
				<w3m-button />
			) : !witnessDeclarations?.length ? (
				'No declarations..'
			) : (
				<>
					{witnessDeclarations
						?.slice()
						.reverse()
						.map(declaration => <DeclarationCard key={declaration.id} declaration={declaration} />)}
				</>
			)}
		</div>
	)
}
