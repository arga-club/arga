'use client'

import Link from 'next/link'
import { Button } from '~/app/_components/ui/button'

export default function Home() {
	return (
		<div className='container'>
			<h1>Arga</h1>
			<h2>Declarations</h2>
			<p>No declarations..</p>
			<Link href='/declaration/new'>
				<Button>New Declaration</Button>
			</Link>
		</div>
	)
}
