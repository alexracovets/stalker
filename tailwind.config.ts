import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				calibri: ["var(--font-calibri)"],
				stalker: ["var(--font-stalker)"],
				roboto_condensed: ["var(--font-roboto_condensed)"],
				roboto: ["var(--font-roboto)"],
			},
			colors: {
				primary: {
					black: "#0A0A09",
					white: "#FFFFFF",
					gray: "#9E9D98",
					dark_gray: "#7B7B7A"
				},
				regular: {
					black: "#160F10",
					white: "#EBEAE8",
					white_opacity: "#ebeae83d",
				},
				main: {
					black: "#11100E"
				},
				pda: {
					white: "#A8A3A0"
				}
			},
			backgroundImage: {
				'start-pattern': "url('/btn/startBtnTexture.png')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
