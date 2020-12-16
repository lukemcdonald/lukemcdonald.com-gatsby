const { fontFamily } = require(`tailwindcss/defaultTheme`);
const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		content: ['./src/**/*.js', './src/**/*.css'],
	},
	theme: {
		colors: {
			inherit: 'inherit',
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			gray: colors.warmGray,
			primary: {
				50: 'var(--color-primary-50)',
				100: 'var(--color-primary-100)',
				200: 'var(--color-primary-200)',
				300: 'var(--color-primary-300)',
				400: 'var(--color-primary-400)',
				500: 'var(--color-primary-500)',
				600: 'var(--color-primary-600)',
				700: 'var(--color-primary-700)',
				800: 'var(--color-primary-800)',
				900: 'var(--color-primary-900)',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Archivo', ...fontFamily.sans],
			},
			screens: {
				xs: '420px',
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.current'),
						},
					},
				},
			}),
		},
	},
	variants: {
		extend: {
			cursor: ['responsive', 'hover'],
			display: ['responsive', 'group-hover', 'last'],
			opacity: ['responsive', 'hover', 'focus', 'group-hover'],
			visibility: ['responsive', 'group-hover'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
};