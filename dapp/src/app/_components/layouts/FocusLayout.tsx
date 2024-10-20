'use client'

import styled from 'styled-components'
import { usePathname } from 'next/navigation'
import registerBG from '~/images/register-bg.jpg'
import signInBG from '~/images/sign-in-bg-04.jpg'
import { Header } from '~/app/_components/header'

export const FocusLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	const backgroundImageSrc = {
		'/sign-in': signInBG.src,
		'/register': registerBG.src,
	}[pathname]
	return (
		<WholeScreenDiv>
			<div tw='md:flex md:items-center'>
				<PictureBackground
					$backgroundImageSrc={backgroundImageSrc}
					tw='hidden md:block md:self-stretch md:bg-black w-[45%]'
				/>
				<div tw='md:w-[55%]'>
					<Header hideMenu />
					{children}
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

const PictureBackground = styled.div<{ $backgroundImageSrc?: string }>`
	background: url(${({ $backgroundImageSrc }) => $backgroundImageSrc});
	background-size: cover;
	background-position: center center;
`
