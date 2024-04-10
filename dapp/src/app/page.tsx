/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Button } from '~/app/_components/ui/button'
import { Prose } from '~/app/_components/ui/prose'
import heroImage from '~/images/hero.webp'
import borderImage from '~/images/border-horz-01.svg'
import step1Image from '~/images/make-your-declaration-2.webp'
import step2Image from '~/images/do-the-work.webp'
import step3Image from '~/images/achievements.webp'
import titleDecoration01 from '~/images/title-decoration-01.svg'

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
						<p>
							Welcome to Decentralised Motivation.
							<br />
							Self improvement has never been so easy.
						</p>
						<Link href='/declarations'>
							<Button>Make your declaration →</Button>
						</Link>
					</Prose>
					<Image src={heroImage} alt='cool image showing the vibe of this product' tw='max-w-screen-sm mt-0' />
				</div>
			</div>
			<Border />
			<div tw='bg-warmGray-100'>
				<div tw='container'>
					<div tw='px-3 pt-16 pb-20'>
						<Prose tw='mx-auto text-center'>
							<h1>Put your money to work</h1>
							<p>
								Why pay hundreds or thousands to someone for your self-help when you can pay yourself instead
								for effective, controlled progress?
							</p>
							<p>
								Whether you are looking to achieve long or short term goals in work, love, health or play, pay
								yourself or someone else to get it done. Then show off your glorious victory with your unique
								Legacy that will be stored forever on the blockchain.
							</p>
							<p>
								Have a verifiable way to prove your humanity through your achievements in this new fast evolving
								world.
							</p>
						</Prose>
					</div>
				</div>
			</div>
			<Border $flip />
			<div tw='container'>
				<div tw='px-3 pt-16 pb-20'>
					<Prose tw='pb-20'>
						<h1 tw='mb-5'>A simple process for unbelievable results</h1>
						<TitleUnderline $scale={0.5} tw='w-96' />
						<p>
							When you have something you want to achieve or a behaviour you would like to change, make a
							Declaration to the world. This could be as simple as cleaning the windows or as large scale as
							scoring a new job.
						</p>
					</Prose>
					<div tw='space-x-20 flex justify-between items-center'>
						<Image src={step1Image} alt='step 1' tw='max-w-xl' />
						<Prose tw='ml-auto'>
							<h2 tw='mb-5'>1. Make your declaration</h2>
							<TitleUnderline $scale={0.5} tw='w-96' />
							<ul>
								<li>What will you achieve? By when will you achieve it?</li>
								<li>Allocate some of your collateral depending on how much motivation you need</li>
								<li>Nominate a witness who will verify your success on chain</li>
							</ul>
						</Prose>
					</div>
					<div tw='space-x-20 flex justify-between items-center'>
						<Prose>
							<h2 tw='mb-5'>2. Do the work and submit evidence</h2>
							<TitleUnderline $scale={0.5} tw='w-96' />
							<ul>
								<li>You have raised the stakes for yourself, you&#039;ll find a way to make it happen!</li>
								<li>Upload photos, videos, or textual evidence for the witness to verify</li>
								<li>Witness approves based on the information</li>
							</ul>
						</Prose>
						<Image src={step2Image} alt='step 2' tw='max-w-xl' />
					</div>
					<div tw='space-x-20 flex justify-between items-center'>
						<Image src={step3Image} alt='step 3' tw='max-w-xl' />
						<Prose tw='ml-auto'>
							<h2 tw='mb-5'>3. Achievement unlocked</h2>
							<TitleUnderline $scale={0.5} tw='w-96' />
							<ul>
								<li>Congratulations, you motivated yourself to hit an important milestone!</li>
								<li>
									Your achievement becomes part of your legacy, stored on a public ledger for anyone to view
								</li>
							</ul>
						</Prose>
					</div>
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

const TitleUnderline = styled.div<{ $flip?: boolean; $scale?: number }>`
	background: url(${titleDecoration01.src});
	background-size: ${({ $scale }) => (titleDecoration01.width / 3) * ($scale ?? 1)}px
		${({ $scale }) => (titleDecoration01.height / 3) * ($scale ?? 1)}px;
	height: ${({ $scale }) => (titleDecoration01.height / 3) * ($scale ?? 1)}px;
	${({ $flip }) =>
		$flip &&
		css`
			transform: scaleY(-1);
		`}
`
