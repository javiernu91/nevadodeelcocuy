/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			lightBg: '#FDFDFF',
			lightText: '#19191C',
			lightBorder: '#C0E9D1',
			darkBg: '#19191C',
			darkText: '#FDFDFF'
			

		},
		extend: {},
	},
	plugins: [],
	darkMode: 'class'
}
