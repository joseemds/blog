const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'exo': ['"Exo 2 Variable"'],
				'source-sans': ['"Source Sans 3 Variable"'],
				'source-serif': ['"Source Serif Pro'],
				'source-mono': ['"Source Code Pro Variable"']
			}

		},
	},
	plugins: [],
}
