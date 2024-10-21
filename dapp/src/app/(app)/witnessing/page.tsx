/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import { useAccount } from 'wagmi'
import WitnessingDeclarations from '~/app/_components/data/WitnessingDeclarations'
import { Prose } from '~/app/_components/ui/prose'

export default function Home() {
	const { address } = useAccount()
	return (
		<>
			<div tw='space-y-10'>
				<Prose>
					<h1>Witnessing</h1>
					<p>My address: {address}</p>
				</Prose>
				<WitnessingDeclarations />
			</div>
		</>
	)
}
