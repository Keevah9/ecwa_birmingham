// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    extract: {
        include: ["./pages/**/*.{js,ts,jsx,tsx, mdx}", "./components/**/*.{js,ts,jsx,tsx, mdx} ", "./ components/**/ *.{ js, ts, jsx, tsx, mdx } "],
        exclude: ['node_modules', '.git', '.next'],
    },
})