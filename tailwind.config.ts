import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Itt mondjuk meg a Tailwindnek, hogy keresse a CSS változókat
        brand: {
          bg: 'rgb(var(--brand-bg) / <alpha-value>)',       // #F5F7FA
          primary: 'rgb(var(--brand-primary) / <alpha-value>)', // #2C5D8A
          light: 'rgb(var(--brand-light) / <alpha-value>)',   // #8FBCE6
          dark: 'rgb(var(--brand-dark) / <alpha-value>)',     // #2B2F33
          muted: 'rgb(var(--brand-muted) / <alpha-value>)',   // #5F6B75
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;