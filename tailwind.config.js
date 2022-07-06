/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				openSans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'promo-pattern':
					"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/images/david-marcu-78A265wPiO4-unsplash.jpg')",
			},
			keyframes: {
				slides: {
					'0%': { left: '0px' },
					'10%': { left: '0px' },
					'	20%': { left: '500px' },
					'30%': { left: '500px' },
					'40%': { left: '500px' },
					'50%': { left: '500px' },
					'60%': { left: '1536px' },
					'70%': { left: '1536px' },
					'80%': { left: '1536px' },
					'90%': { left: ' 1536px' },
					'100%': { left: '1536px' },
				},
			},
			animation: {
				slides: 'slides 3s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
