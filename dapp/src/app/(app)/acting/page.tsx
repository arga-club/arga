'use client'

import ActingDeclarations from '~/app/_components/data/ActingDeclarations'
import { Prose } from '~/app/_components/ui/prose'

export default function Home() {
	return (
		<>
			<div tw='space-y-10'>
				<Prose>
					<h1>Acting</h1>
				</Prose>
				<ActingDeclarations />
			</div>
		</>
	)
}
