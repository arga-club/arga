'use client'

import Image from 'next/image'
import { Prose } from '~/app/_components/ui/prose'
import logo from '~/images/abstract-options-07-icon.png'

export const Logo = ({ className }: { className?: string }) => {
	return (
		<Prose className={className} tw='flex space-x-4 items-center'>
			<Image src={logo} alt='flowchart showing process in detail' tw='size-12 my-0' />
			<h1 tw='translate-y-[-1px] my-2'>Arga</h1>
		</Prose>
	)
}
