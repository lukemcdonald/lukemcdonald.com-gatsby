const { fontFamily } = require(`tailwindcss/defaultTheme`)

module.exports = {
	theme: {
		extend: {
			colors: {
				current: `currentColor`,
				inherit: `inherit`,
				white: '#fff',
				gray: {
					'100': '#f8f9f8',
					'200': '#E4E5E5',
					'300': '#d0d1d1',
					'400': '#bebebe',
					'500': '#969796',
					'600': '#7C7D7C',
					'700': '#626362',
					'800': '#484948',
					'900': '#202120',
				},
				primary: {
					'100': '#fafdf9',
					'200': '#DBEECD',
					'300': '#BCDFA1',
					'400': '#9CD075',
					'500': '#7dc149', // common
					'600': '#49A24C',
					'700': '#15824e', // common
					'800': '#175C35',
					'900': '#18351c', // common
				},
			},
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
		},
	},
	variants: {
		cursor: ['responsive', 'hover'],
		display: ['responsive', 'group-hover', 'last'],
		opacity: ['responsive', 'hover', 'focus', 'group-hover'],
		visibility: ['responsive', 'group-hover'],
	},
	plugins: [],
}
