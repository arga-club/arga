'use client'

import styled from 'styled-components'

export default function DeclarationLayout({ children }: { children: React.ReactNode }) {
	return <Root>{children}</Root>
}

const Root = styled.div`
	min-height: 80vh;
	background: linear-gradient(0deg, #3457d5, white);
`
