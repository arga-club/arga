import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'
import { db } from '~/server/db'
import type { FIXME } from '~/types/utils'

export async function POST(req: Request) {
	try {
		const { preferredName, handle, email, password } = (await req.json()) as {
			preferredName: string
			handle: string
			email: string
			password: string
		}
		const hashed_password = await hash(password, 12)

		const user = await db.user.create({
			data: {
				preferredName,
				handle,
				email: email.toLowerCase(),
				password: hashed_password,
			},
		})

		return NextResponse.json({
			user: {
				preferredName: user.preferredName,
				handle: user.handle,
				email: user.email,
			},
		})
	} catch (e) {
		const error: FIXME = e
		return new NextResponse(
			JSON.stringify({
				status: 'error',
				message: error.message,
			}),
			{ status: 500 },
		)
	}
}
