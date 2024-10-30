'use client'

import { zeroAddress } from 'viem'
import { useReadArgaDiamondAllDeclarations } from '~/lib/generated'
import { chainId } from '~/lib/wagmi-config'
import { DeclarationCard } from '~/app/_components/DeclarationCard'
import { Skeleton } from '~/app/_components/ui/skeleton'

export default function CommunityDeclarations() {
	const { data: declarations, isInitialLoading } = useReadArgaDiamondAllDeclarations({
		chainId,
		args: [0n, 20n],
	})

	return (
		<div tw='space-y-8'>
			{isInitialLoading ? (
				<div tw='space-y-8'>
					<Skeleton tw='w-full h-52' />
					<Skeleton tw='w-full h-52' />
					<Skeleton tw='w-full h-52' />
				</div>
			) : !declarations?.length ? (
				'No declarations...'
			) : (
				declarations
					.filter(declaration => declaration.actor !== zeroAddress)
					.map(declaration => <DeclarationCard key={declaration.id} declaration={declaration} />)
			)}
		</div>
	)
}
