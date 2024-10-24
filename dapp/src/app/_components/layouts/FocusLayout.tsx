'use client'

import styled from 'styled-components'
import { usePathname } from 'next/navigation'
import registerBG from '~/images/register-bg.jpg'
import signInBG from '~/images/sign-in-bg-04.jpg'
import { Logo } from '~/app/_components/Logo'
import { PictureBackground } from '~/app/_components/PictureBackground'

export const FocusLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	const backgroundImageSrc = {
		'/sign-in': signInBG.src,
		'/register': registerBG.src,
	}[pathname]
	return (
		<WholeScreenDiv>
			<div tw='md:flex md:items-center'>
				<PictureBackground $backgroundImageSrc={backgroundImageSrc} tw='hidden md:block md:self-stretch w-[45%]' />
				<div tw='md:w-[55%]'>
					<div tw='container'>
						<Logo />
						<div tw='pt-16 pb-20 space-y-10'>{children}</div>
					</div>
				</div>
			</div>
		</WholeScreenDiv>
	)
}

const WholeScreenDiv = styled.div`
	height: 100vh;
	min-height: 80rem;
	> * {
		height: 100%;
	}
`
