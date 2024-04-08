'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/app/_components/ui/button'
import { Prose } from '~/app/_components/ui/prose'
import heroImage from '~/images/hero.webp'

export default function Home() {
	return (
		<>
			<div tw='container'>
				<div tw='px-3 pt-16 pb-20 space-y-10 space-x-20 flex justify-between items-center'>
					<Prose large>
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
					<Image src={heroImage} alt='cool image showing the vibe of this product' tw='max-w-screen-sm' />
				</div>
			</div>
			<div tw='bg-black'>
				<div tw='container'>
					<div tw='px-3 pt-16 pb-20'>
						<Prose tw='mx-auto text-center'>
							<h1 tw='font-normal text-white'>Put your money to work</h1>
							<p tw='text-white'>
								Why pay hundreds or even thousands to someone for your self-help when you can pay yourself
								instead for more effective, controlled progress?
							</p>
							<p tw='text-white'>
								No matter if you are looking to achieve long or short term goals in work, love, health or play,
								pay yourself or someone else to get it done. Then show off your glorious victory with your
								unique Legacy that will be stored forever on the blockchain.
							</p>
							<p tw='text-white'>
								Have a verifiable way to prove your humanity through your achievements in this new fast evolving
								world.
							</p>
						</Prose>
					</div>
				</div>
			</div>
		</>
	)
}
