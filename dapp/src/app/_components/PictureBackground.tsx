import styled from 'styled-components'

export const PictureBackground = styled.div<{ $backgroundImageSrc?: string }>`
	background: black;
	background-image: url(${({ $backgroundImageSrc }) => $backgroundImageSrc});
	background-size: cover;
	background-position: center center;
`
