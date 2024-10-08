'use client'

import { signIn } from 'next-auth/react'
import { ChangeEvent, useState } from 'react'
import { FIXME } from '~/types/utils'

const inputStyle = [
	'block w-full px-4 py-5 m-0',
	'bg-white bg-clip-padding border border-solid border-gray-300 rounded',
	'text-sm font-normal text-gray-700',
	'transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
].join(' ')

export default function RegisterPage() {
	const [loading, setLoading] = useState(false)
	const [formValues, setFormValues] = useState({
			preferredName: '',
			handle: '',
			email: '',
			password: '',
	})
	const [error, setError] = useState('')

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				body: JSON.stringify(formValues),
				headers: {
					'Content-Type': 'application/json',
				},
			})

			setLoading(false)
			if (!res.ok) {
				setError((await res.json()).message)
				return
			}

			signIn(undefined, { callbackUrl: '/' })
		} catch (e) {
			const error: FIXME = e
			setLoading(false)
			setError(error)
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = event.target
		setFormValues({ ...formValues, [name]: value })
	}

	return (
		<form onSubmit={onSubmit} className="space-y-6">
			{error && <p className="text-center bg-red-300 py-4 rounded">{error}</p>}
			<input
				type="preferredName"
				name="preferredName"
				value={formValues.preferredName}
				onChange={handleChange}
				placeholder="Your name"
				className={inputStyle}
			/>
			<input
				type="handle"
				name="handle"
				value={formValues.handle}
				onChange={handleChange}
				placeholder="Handle"
				className={inputStyle}
			/>
			<input
				required
				type="email"
				name="email"
				value={formValues.email}
				onChange={handleChange}
				placeholder="Email address"
				className={inputStyle}
			/>
			<input
				required
				type="password"
				name="password"
				value={formValues.password}
				onChange={handleChange}
				placeholder="Password"
				className={inputStyle}
			/>
			<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
				<p className="text-center font-semibold mx-4 mb-0">Organization</p>
			</div>
			<button
				type="submit"
				style={{ backgroundColor: `${loading ? '#ccc' : '#3446eb'}` }}
				className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
				disabled={loading}
			>
				{loading ? 'loading...' : 'Sign Up'}
			</button>
		</form>
	)
}
