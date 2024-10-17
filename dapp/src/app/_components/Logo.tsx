'use client'

import Image from 'next/image'
import { Prose } from '~/app/_components/ui/prose'
import logo from '~/images/abstract-option-08.png'

export const Logo = ({ className }: { className?: string }) => {
	return (
		<Prose className={className} tw='flex space-x-4 items-center'>
			<Image src={logo} alt='flowchart showing process in detail' tw='w-16 h-16 my-0' />
			<h1 tw='mb-0 text-5xl'>Arga</h1>
		</Prose>
	)
}
