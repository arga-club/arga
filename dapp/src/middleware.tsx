export { default } from 'next-auth/middleware'

export const config = {
	matcher: ['/wallets', '/account', '/acting', '/witnessing', '/notifications'],
}
