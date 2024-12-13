'use client'

import WitnessingDeclarations from '~/app/_components/data/WitnessingDeclarations'
import { Prose } from '~/app/_components/ui/prose'

export default function Home() {
	return (
		<>
			<div tw='space-y-10'>
				<Prose>
					<h1>Witnessing</h1>
				</Prose>
				<WitnessingDeclarations />
			</div>
		</>
	)
}
