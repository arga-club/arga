import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.tsx'],
	theme: {
		colors: {
			primary: {
				DEFAULT: '#3457D5',
				50: '#CCD5F4',
				100: '#BBC7F1',
				200: '#99ABEA',
				300: '#788FE3',
				400: '#5673DC',
				500: '#3457D5',
				600: '#2442AD',
				700: '#1A307F',
				800: '#111E50',
				900: '#070D22',
				950: '#02040A',
			},
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
} satisfies Config
