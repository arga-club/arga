'use client'

import ActorDeclarations from '~/app/_components/data/actor-declarations'

export default function Home() {
	return (
		<div tw='container'>
			<div tw='px-3 pt-16 pb-20 space-y-10'>
				<ActorDeclarations />
			</div>
		</div>
	)
}
