'use client'

import { useAccount } from 'wagmi'
import { useReadArgaDiamondWitnessDeclarations } from '~/lib/generated'
import { chainId } from '~/lib/wagmi-config'
import { DeclarationCard } from '~/app/_components/DeclarationCard'

export default function WitnessingDeclarations() {
	const { address, isConnecting } = useAccount()
	const { isInitialLoading: isWitnessDeclarationsInitialLoading, data: witnessDeclarations } =
		useReadArgaDiamondWitnessDeclarations({
			query: { enabled: !!address },
			args: address ? [address] : undefined,
			chainId,
		})

	return (
		<div tw='space-y-8'>
			{isWitnessDeclarationsInitialLoading ? (
				'Loading..'
			) : isConnecting ? (
				'Connecting..'
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
