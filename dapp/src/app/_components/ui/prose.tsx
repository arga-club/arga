import styled from 'styled-components'
import tw from 'twin.macro'

export const Prose = styled.div<{ $large?: boolean }>`
	${tw`prose prose-slate`}
	// h1
	${tw`prose-h1:font-serif prose-h1:font-normal prose-h1:text-4xl`}
	// h2
	${tw`prose-h2:font-serif prose-h2:font-normal`}
	// h3
	${tw`prose-h3:font-serif prose-h3:font-normal`}
	// blockquote
	${tw`prose-blockquote:font-serif`}
	${({ $large }) => $large && tw`prose-h1:text-7xl prose-blockquote:text-2xl`}
`
