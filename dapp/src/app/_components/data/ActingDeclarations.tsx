'use client'

import { useAppKitAccount } from '@reown/appkit/react'
import { useReadArgaDiamondActorDeclarations } from '~/lib/generated'
import { chainId } from '~/lib/wagmi-config'
import { DeclarationCard } from '~/app/_components/DeclarationCard'

export default function ActingDeclarations() {
	const { address, isConnected } = useAppKitAccount()
	const { isInitialLoading: isActingDeclarationsInitialLoading, data: actingDeclarations } =
		useReadArgaDiamondActorDeclarations({
			query: { enabled: !!address },
			args: address ? ([address] as [`0x${string}`]) : undefined,
			chainId,
		})

	return (
		<div tw='space-y-8'>
			{isActingDeclarationsInitialLoading ? (
				'Loading..'
			) : !isConnected ? (
				<w3m-button />
			) : !actingDeclarations?.length ? (
				'No declarations..'
			) : (
				<>
					{actingDeclarations
						?.slice()
						.reverse()
						.map(declaration => <DeclarationCard key={declaration.id} declaration={declaration} />)}
				</>
			)}
		</div>
	)
}
