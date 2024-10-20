/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import CommunityDeclarations from '~/app/_components/data/community-declarations'
import { Prose } from '~/app/_components/ui/prose'

export default function Home() {
	return (
		<>
			<Prose>
				<h1>Declarations</h1>
			</Prose>
			<CommunityDeclarations />
		</>
	)
}
