/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import ActorDeclarations from '~/app/_components/data/actor-declarations'
import { Button } from '~/app/_components/ui/button'
import { Prose } from '~/app/_components/ui/prose'
import borderImage from '~/images/border-horz-01.svg'

export default function Home() {
	return (
		<>
			<Border $flip tw='-mt-2' />
			<div tw='container'>
				<div tw='pt-16 pb-20 space-y-10'>
					<Prose>
						<h1>My declarations</h1>
					</Prose>
					<ActorDeclarations />
					<Link tw='block' href='/declarations/new'>
						<Button>New Declaration</Button>
					</Link>
				</div>
			</div>
		</>
	)
}

const Border = styled.div<{ $flip?: boolean }>`
	background: url(${borderImage.src});
	background-size: ${borderImage.width / 3}px ${borderImage.height / 3}px;
	height: ${borderImage.height / 3}px;
	${({ $flip }) =>
		$flip &&
		css`
			transform: scaleY(-1);
		`}
`
