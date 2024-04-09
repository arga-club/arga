/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Button } from '~/app/_components/ui/button'
import { Prose } from '~/app/_components/ui/prose'
import heroImage from '~/images/hero.webp'
import borderImage from '~/images/border-horz-01.svg'

export default function Home() {
	return (
		<>
			<Border $flip tw='-mt-2' />
			<div tw='container'>
				<div tw='px-3 py-10 space-x-20 flex justify-between items-center'>
					<Prose $large>
						<blockquote>
							&quot;First say to yourself what you would be;
							<br />
							and then do what you have to do&quot;
							<br />- Epictetus
						</blockquote>
						<p>Welcome to Decentralised Motivation. Self-help has never been so easy.</p>
						<Link href='/declarations'>
							<Button>Make your declaration →</Button>
						</Link>
					</Prose>
					<Image src={heroImage} alt='cool image showing the vibe of this product' tw='max-w-screen-sm mt-0' />
				</div>
			</div>
			{/*<Image src={borderImage} alt='roman style border design' tw='max-w-screen-sm bg-repeat-x' />*/}
			<Border />
			<div tw='bg-warmGray-100'>
				<div tw='container'>
					<div tw='px-3 pt-16 pb-20'>
						<Prose tw='mx-auto text-center'>
							<h1 tw='font-normal text-black'>Put your money to work</h1>
							<p tw='text-black'>
								Why pay hundreds or even thousands to someone for your self-help when you can pay yourself
								instead for more effective, controlled progress?
							</p>
							<p tw='text-black'>
								No matter if you are looking to achieve long or short term goals in work, love, health or play,
								pay yourself or someone else to get it done. Then show off your glorious victory with your
								unique Legacy that will be stored forever on the blockchain.
							</p>
							<p tw='text-black'>
								Have a verifiable way to prove your humanity through your achievements in this new fast evolving
								world.
							</p>
						</Prose>
					</div>
				</div>
			</div>
			<Border $flip />
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
