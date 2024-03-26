/** @type {import("eslint").Linter.Config} */
const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:import/typescript',
		'plugin:react/recommended',
	],
	rules: {
		// These opinionated rules are enabled in stylistic-type-checked above.
		// Feel free to reconfigure them to your own preference.
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: { attributes: false },
			},
		],
		'import/order': ['error', { 'newlines-between': 'never' }],
		'import/no-relative-packages': 'error',
		'no-restricted-imports': ['error', { patterns: ['./*', '../*'] }],
		// maybe re-enable these after development
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		// react
		'react/no-unknown-property': ['error', { ignore: ['tw', 'css'], requireDataLowercase: true }],
		'react/self-closing-comp': 'error',
		'react/react-in-jsx-scope': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
}

module.exports = config
