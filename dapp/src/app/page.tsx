'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/app/_components/ui/button'
import heroImage from '~/images/hero.webp'

export default function Home() {
	return (
		<div tw='container'>
			<div tw='px-3 pt-16 pb-20 space-y-10 flex justify-between items-center'>
				<div tw='prose-slate prose-xl prose-h1:font-serif prose-h1:text-7xl'>
					<h1>Arga</h1>
					<h3>
						Pay yourself to do
						<br />
						what you want you to do
					</h3>
					<Link href='/declarations'>
						<Button>Make your declaration →</Button>
					</Link>
				</div>
				<Image src={heroImage} alt='cool image showing the vibe of this product' tw='max-w-screen-md' />
			</div>
		</div>
	)
}
