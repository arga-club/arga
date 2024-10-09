/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import styled, { css } from 'styled-components'
import { useAccount } from 'wagmi'
import WitnessingDeclarations from '~/app/_components/data/WitnessingDeclarations'
import { Prose } from '~/app/_components/ui/prose'
import borderImage from '~/images/border-horz-01.svg'

export default function Home() {
	const { address } = useAccount()
	return (
		<>
			<Border $flip tw='-mt-2' />
			<div tw='container'>
				<div tw='pt-16 pb-20 space-y-10'>
					<Prose>
						<h1>Witnessing</h1>
						<p>My address: {address}</p>
					</Prose>
					<WitnessingDeclarations />
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
