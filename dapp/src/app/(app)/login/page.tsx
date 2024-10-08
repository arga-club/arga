'use client'

import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { type ChangeEvent, useState } from 'react'

const inputStyle = [
	'block w-full px-4 py-5 m-0',
	'bg-white bg-clip-padding border border-solid border-gray-300 rounded',
	'text-sm font-normal text-gray-700',
	'transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
].join(' ')

export default function RegisterPage() {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	})
	const [error, setError] = useState('')

	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') ?? '/declarations'

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			setLoading(true)
			setFormValues({ email: '', password: '' })

			const res = await signIn('credentials', {
				redirect: true,
				email: formValues.email,
				password: formValues.password,
				callbackUrl,
			})
			if (!res?.error) {
				router.push(callbackUrl)
			} else {
				setError('invalid email or password')
			}
		} catch (e) {
			const error: FIXME = e
			setLoading(false)
			setError(error)
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormValues({ ...formValues, [name]: value })
	}

	return (
		<form onSubmit={onSubmit} className="space-y-6">
			{error && <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>}
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
			<div className="space-y-3">
				<button
					type="submit"
					style={{ backgroundColor: `${loading ? '#ccc' : '#3446eb'}` }}
					className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
					disabled={loading}
				>
					{loading ? 'loading...' : 'Sign In'}
				</button>
			</div>
		</form>
	)
}
