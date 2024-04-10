import styled from 'styled-components'
import tw from 'twin.macro'

export const Prose = styled.div<{ $large?: boolean }>`
	${tw`prose prose-slate`}
	// h1
	${tw`prose-h1:font-serif prose-h1:font-normal`}
	// h2
	${tw`prose-h2:font-serif prose-h2:font-normal`}
	// blockquote
	${tw`prose-blockquote:font-serif`}
	${({ $large }) => $large && tw`prose-h1:text-7xl prose-blockquote:text-2xl`}
`
