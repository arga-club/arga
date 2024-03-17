/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line no-restricted-imports
import withTwin from './withTwin.mjs'

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js')

/** @type {import("next").NextConfig} */
const config = withTwin({
	compiler: {
		styledComponents: true,
	},
	webpack: (config, context) => {
		config.plugins?.push(
			new context.webpack.IgnorePlugin({
				resourceRegExp: /^(pino-pretty|encoding)$/,
			}),
		)
		return config
	},
})

export default config
