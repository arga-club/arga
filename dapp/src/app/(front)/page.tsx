/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import dynamic from 'next/dynamic'
import { Button } from '~/app/_components/ui/button'
import { Prose } from '~/app/_components/ui/prose'
import heroImage from '~/images/hero.webp'
import borderImage from '~/images/border-horz-01.svg'
import step1Image from '~/images/make-your-declaration-2.webp'
import step2Image from '~/images/do-the-work.webp'
import step3Image from '~/images/achievements.webp'
import titleDecoration01 from '~/images/title-decoration-01.svg'
import { Card, CardContent, CardHeader } from '~/app/_components/ui/card'
import wreath from '~/images/wreath-01.svg'
import flowchart from '~/images/flowchart.png'

export default function Home() {
	return (
		<Root>
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
							Self improvement made easy.
						</p>
						<Link href='/declarations'>
							<Button>Make your declaration →</Button>
						</Link>
					</Prose>
					<KeyImage src={heroImage} alt='cool image showing the vibe of this product' $large />
				</div>
			</div>
			<Border />
			<WreathBackground $scale={2}>
				<div tw='container'>
					<div tw='px-3 pt-16 pb-20'>
						<Prose tw='mx-auto text-center'>
							<h1>Take a step</h1>
							<p>
								Why pay others for help when you can incentivize yourself for effective, controlled progress?
								Whether you are looking to achieve long or short term goals in any area of your life, we allow
								you to put existing assets on the line to generate motivation.
							</p>
							<p>
								Set your goal, achieve success, and show off your glorious victory with your unique Legacy that
								will forever live on the blockchain. We now have a way to prove our humanity through our
								achievements in this fast evolving world.
							</p>
						</Prose>
					</div>
				</div>
			</WreathBackground>
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
					<div tw='space-x-20 flex justify-between items-center mb-20'>
						<KeyImage src={step1Image} alt='step 1' />
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
					<div tw='space-x-20 flex justify-between items-center mb-20'>
						<Prose>
							<h2 tw='mb-5'>2. Do the work and submit evidence</h2>
							<TitleUnderline $scale={0.5} tw='w-96' />
							<ul>
								<li>You have raised the stakes for yourself, you&#039;ll find a way to make it happen!</li>
								<li>Upload photos, videos, or textual evidence for the witness to verify</li>
								<li>Witness approves based on the information</li>
							</ul>
						</Prose>
						<KeyImage src={step2Image} alt='step 2' />
					</div>
					<div tw='space-x-20 flex justify-between items-center'>
						<KeyImage src={step3Image} alt='step 3' />
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
			<Border />
			<div tw='bg-stone-100'>
				<div tw='container'>
					<div tw='px-3 pt-16 pb-20'>
						<Prose tw='mx-auto text-center'>
							<h1>Key Features</h1>
						</Prose>
						<FlexWrap>
							<StyledCard>
								<CardContent>
									<Prose>
										<CardHeader tw='pl-0'>
											<h2 tw='m-0'>Success in Failure</h2>
										</CardHeader>
										If you fail to honor your declaration your funds will be lost, this is a key feature of
										Arga and what will motivate you to be successful! Use this opportunity to reflect and come
										back stronger.
									</Prose>
								</CardContent>
							</StyledCard>
							<StyledCard>
								<CardContent>
									<Prose>
										<CardHeader tw='pl-0'>
											<h2 tw='m-0'>Arga Lottery</h2>
										</CardHeader>
										Lost funds are added to a pool that anyone has a chance to win when making a declaration.
										If you fail then declare again for a chance at success and regaining your funds.
									</Prose>
								</CardContent>
							</StyledCard>
							<StyledCard>
								<CardContent>
									<Prose>
										<CardHeader tw='pl-0'>
											<h2 tw='m-0'>Witness Incentives</h2>
										</CardHeader>
										Declaration witnessing can be done by anybody, like a family member, friend, or trusted
										third party, and witnesses are incentivized to be accurate and fair. Arga provides ways to
										find reputable and reliable witnesses.
									</Prose>
								</CardContent>
							</StyledCard>
							<StyledCard>
								<CardContent>
									<Prose>
										<CardHeader tw='pl-0'>
											<h2 tw='m-0'>Pass it on</h2>
										</CardHeader>
										Inspire others by sharing your successes in a provable way. Build a network of like-minded
										actors who push each other to aim high. Use the power of social networks for positive
										change.
									</Prose>
								</CardContent>
							</StyledCard>
						</FlexWrap>
						<KeyImage
							src={flowchart}
							alt='flowchart showing process in detail'
							tw='max-w-screen-lg mx-auto mt-20 shadow-none'
						/>
					</div>
				</div>
			</div>
			<Border $flip />
			<div tw='container'>
				<div tw='px-3 pt-16 pb-20'>
					<div tw='space-x-20 flex justify-between items-center mb-20'>
						<Prose tw='pb-20'>
							<h1 tw='mb-5'>How are funds handled?</h1>
							<TitleUnderline $scale={0.5} tw='w-96' />
							<p>
								Arga is totally decentralized, which means that funds are handled automatically by smart
								contracts on the blockchain, not by people. Almost all funds are returned to the actor upon a
								witness&#039; approval. 2% goes to the designated witness, and another 2% goes to the protocol
								as a duty, to fund the development of the platform.
							</p>
							<p>
								The duty may not seem necessary, but it acts as a disincentive for actors to designate
								themselves as a witness and fraudulently approve their own declaration to fool others. When a
								duty is applied, it&#039;s still possible to be fraudulent, but not for free. For honest actors,
								the value of achieving a stated goal should be larger than the value of the duty.
							</p>
						</Prose>
						<StyledPieChart
							width={650}
							height={450}
							data={[
								{ key: 'Actor (96%)', data: 96 },
								{ key: 'Witness (2%)', data: 2 },
								{ key: 'Duty (2%)', data: 2 },
							]}
							series={
								<PieArcSeries
									cornerRadius={1}
									padAngle={0.02}
									padRadius={200}
									doughnut={true}
									colorScheme='cybertron'
								/>
							}
						/>
					</div>
					<div tw='space-x-20 flex justify-between items-center mb-20'>
						<Prose tw='pb-20'>
							<h1 tw='mb-5'>Project status</h1>
							<TitleUnderline $scale={0.5} tw='w-96' />
							<p>
								Arga is currently deployed to Ethereum&#039;s Sepolia testnet in an early alpha stage. Follow us
								on our socials to stay up to date and DM us if you&#039;d like to invest. We have big things
								planned!
							</p>
							<ul>
								<li>
									Support for multiple ERC20 tokens, including liquid staking tokens like stETH, allowing your
									collateral to stay earning!
								</li>
								<li>Social features like following, privacy, and Legacy (profile) customization</li>
								<li>NFTs that represent your success!</li>
								<li>Group declarations, corporate declarations, declaration sponsorship.</li>
								<li>Automated AI or API witnesses that will automatically approve or reject declarations.</li>
								<li>
									Witness &quot;marketplace&quot; for finding witnesses that are reputable and that you
									personally can trust
								</li>
								<li>
									Partnerships with physical locations and organizations that can lend legitimacy to your
									declarations.
								</li>
							</ul>
							<p>
								Twitter/X:
								<br />
								Telegram:
							</p>
						</Prose>
					</div>
				</div>
			</div>
		</Root>
	)
}

const PieChart = dynamic(() => import('reaviz').then(reaviz => reaviz.PieChart), {
	ssr: false,
	loading: () => <p>loading..</p>,
})
const PieArcSeries = dynamic(() => import('reaviz').then(reaviz => reaviz.PieArcSeries), {
	ssr: false,
	loading: () => <p>loading..</p>,
})

const StyledPieChart = styled(PieChart)`
	position: relative;
	z-index: 2;
`

const WreathBackground = styled.div<{ $scale?: number }>`
	${tw`bg-warmGray-100`}
	position: relative;
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: url(${wreath.src});
		background-size: ${({ $scale }) => (wreath.width / 3) * ($scale ?? 1)}px
			${({ $scale }) => (wreath.height / 3) * ($scale ?? 1)}px;
		background-repeat: no-repeat;
		background-position: center;
		opacity: 0.05;
	}
	> * {
		position: relative;
		z-index: 1;
	}
`

const Root = styled.div`
	overflow: hidden;
	max-width: 100vw;
`

const FlexWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: -2rem;
	margin-top: -2rem;
`

const StyledCard = styled(Card)`
	// https://getcssscan.com/css-box-shadow-examples #73
	// box-shadow:
	// 	rgba(0, 0, 0, 0.15) 0px 15px 25px,
	// 	rgba(0, 0, 0, 0.05) 0px 5px 10px;
	flex: 0 0 calc(50% - 2rem);
	margin-left: 2rem;
	margin-top: 2rem;
	${tw`rounded-lg shadow-lg`}
`

const KeyImage = styled(Image)<{ $large?: boolean }>`
	${tw`mt-0 rounded`}
	${({ $large }) => ($large ? tw`max-w-xl` : tw`max-w-md`)}
	// https://getcssscan.com/css-box-shadow-examples #81
	box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
	position: relative;
	z-index: 20;
`

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
	position: relative;
	&:after {
		content: '';
		background: url(${titleDecoration01.src});
		background-size: ${({ $scale }) => (titleDecoration01.width / 3) * ($scale ?? 1)}px
			${({ $scale }) => (titleDecoration01.height / 3) * ($scale ?? 1)}px;
		height: 100%;
		position: absolute;
		top: 0;
		left: -100vw;
		${({ $flip }) =>
			$flip &&
			css`
				transform: scaleY(-1);
			`}
		width: 200vw;
	}
	height: ${({ $scale }) => (titleDecoration01.height / 3) * ($scale ?? 1)}px;
`
