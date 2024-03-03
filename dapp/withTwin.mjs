/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as path from 'path'
import * as url from 'url'
import babelPluginTypescript from '@babel/plugin-syntax-typescript'
import babelPluginMacros from 'babel-plugin-macros'
import babelPluginTwin from 'babel-plugin-twin'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')]

/** @returns {import('next').NextConfig} */
export default function withTwin(
	/** @type {import('next').NextConfig} */
	nextConfig,
) {
	return {
		...nextConfig,
		compiler: {
			...nextConfig.compiler,
			styledComponents: true,
		},
		webpack(
			/** @type {import('webpack').Configuration} */
			config,
			options,
		) {
			const { dev } = options
			config.module = config.module || {}
			config.module.rules = config.module.rules || []

			config.module.rules.push({
				test: /\.(tsx|ts)$/,
				include: includedDirs,
				use: [
					{
						loader: 'babel-loader',
						options: {
							sourceMaps: dev,
							plugins: [
								babelPluginTwin,
								babelPluginMacros,
								// no more need for babel-plugin-styled-components
								// see: https://nextjs.org/docs/architecture/nextjs-compiler#styled-components
								[babelPluginTypescript, { isTSX: true }],
							],
						},
					},
				],
			})

			if (typeof nextConfig.webpack === 'function') {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-return
				return nextConfig.webpack(config, options)
			}
			return config
		},
	}
}
