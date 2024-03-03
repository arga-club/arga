/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	trailingComma: 'all',
	tabWidth: 3,
	semi: false,
	singleQuote: true,
	useTabs: true,
	printWidth: 120,
	arrowParens: 'avoid',
	jsxSingleQuote: true,
}

export default config
