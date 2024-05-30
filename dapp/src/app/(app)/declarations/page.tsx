/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import ActorDeclarations from '~/app/_components/data/actor-declarations'
import CommunityDeclarations from '~/app/_components/data/community-declarations'
import { Button } from '~/app/_components/ui/button'
import { Prose } from '~/app/_components/ui/prose'
import borderImage from '~/images/border-horz-01.svg'
import { useCurrentAccount, ConnectButton } from '@mysten/dapp-kit';
import { getBalance, formatSuiBalance, shortenAddress } from '~/lib/sui-config'
import { useEffect, useState } from 'react';

export default function Home() {
	const suiAccount = useCurrentAccount();
	const [balance, setBalance] = useState<string | null>(null);

	useEffect(() => {
		if (suiAccount) {
			(async () => {
				const balanceData = await getBalance(suiAccount.address);
				setBalance(formatSuiBalance(balanceData.totalBalance));
			})();
		}
	}, [suiAccount]);

	return (
		<>
			<Border $flip tw='-mt-2' />
			<div tw='container'>
				<div tw='pt-16 pb-20 space-y-10'>
					<Prose>
						<h1>Community declarations</h1>
					</Prose>
					<CommunityDeclarations />
				</div>
			</div>
			<div tw='container'>
				<div tw='pb-20 space-y-10'>
					<Prose>
						<h1>My declarations</h1>
					</Prose>
					{!suiAccount ? (
						<ConnectButton />
					) : (
						<div>
							<div>Connected to {shortenAddress(suiAccount.address)} with {balance !== null ? balance : '0'} SUI</div>
							<ActorDeclarations />
							<Link tw='block' href='/declarations/new'>
								<Button>New Declaration</Button>
							</Link>
						</div>
					)}
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