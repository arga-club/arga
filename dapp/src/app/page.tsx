'use client'

import { styled } from 'styled-components'

export default function Home() {
	return (
		<Root>
			<div>
				<h1>Arga</h1>
				<h2>New Declaration</h2>
				<div>
					<Label>Summary</Label>
					<input></input>
				</div>
				<div>
					<Label>Description</Label>
					<textarea></textarea>
				</div>
				<div>
					<Label>Actor address</Label>
					<input></input>
				</div>
				<div>
					<Label>Witness address</Label>
					<input></input>
				</div>
				<div>
					<Label>Witness method/criteria</Label>
					<input></input>
				</div>
				<div>
					<Label>End date</Label>
					<input></input>
				</div>
				<div>
					<Label>Witness by date</Label>
					<input></input>
				</div>
				<div>
					<Label>Collateral value (ETH)</Label>
					<input></input>
				</div>
				<button>Declare</button>
			</div>
		</Root>
	)
}

const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Label = styled.label`
	display: block;
`
