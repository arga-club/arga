import styled from 'styled-components'
import tw from 'twin.macro'

export const Prose = styled.div<{ large?: boolean }>`
	${tw`prose prose-slate prose-h1:font-serif prose-blockquote:font-serif`}
	${({ large }) => large && tw`prose-h1:text-7xl prose-blockquote:text-2xl`}
`
