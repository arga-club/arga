'use client'

import Link from 'next/link'
import styled from 'styled-components'

export default function Home() {
	return (
		<Root>
			<h1>Arga</h1>
			<h2>Declarations</h2>
			<p>No declarations..</p>
			<Link href='/declaration/new'>
				<button>New Declaration</button>
			</Link>
		</Root>
	)
}

const Root = styled.div`
	min-height: 80vh;
	background: linear-gradient(0deg, #3457d5, white);
`
