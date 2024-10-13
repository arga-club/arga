'use client'

import styled from 'styled-components'
import background from '~/images/sign-in-bg.jpg'
import { Header } from '~/app/_components/menu-app'

export const FocusLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<WholeScreenDiv>
			<Header />
			<div tw='md:flex md:items-center'>
				<PictureBackground tw='hidden md:block md:self-stretch md:bg-black w-1/2' />
				<div tw='md:w-1/2 md:px-12'>{children}</div>
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

const PictureBackground = styled.div`
	background: url(${background.src});
	background-size: cover;
	background-position: center center;
`
