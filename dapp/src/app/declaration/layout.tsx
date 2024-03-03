'use client'

import styled from 'styled-components'

export default function PrimaryLayout({ children }: { children: React.ReactNode }) {
	return <Root>{children}</Root>
}

const Root = styled.div`
	// background: url('https://images.unsplash.com/photo-1597011652683-a9cec37b3bc8?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
	// background-position: center center;
	min-height: 80vh;
	background: linear-gradient(0deg, #3457d5, white);
`
