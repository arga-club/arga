import styled from 'styled-components'
import tw from 'twin.macro'

export const InputWithElement = styled.div`
	${tw`flex space-x-4`}
	> input {
		flex: 1 1 auto;
	}
	> *:last-child {
		flex: 0 0 auto;
	}
`
