import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#B3CFE5',
          light: '#ffffff',
          dark: '#B3CFE5',
        },
        secondary: {
          DEFAULT: '#B3CFE5',
          light: '#ffffff',
          dark: '#B3CFE5',
        },
        accent: {
          DEFAULT: '#B3CFE5',
          light: '#ffffff',
          dark: '#B3CFE5',
        },
        text: {
          primary: '#1a202c',
          secondary: '#2d3748',
          muted: '#4a5568',
        },
        pastel: {
          blue: '#B3CFE5',
          pink: '#B3CFE5',
          purple: '#B3CFE5',
        },
        softblue: {
          DEFAULT: '#B3CFE5',
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#B3CFE5',
          400: '#B3CFE5',
          500: '#B3CFE5',
          600: '#B3CFE5',
          700: '#B3CFE5',
          800: '#B3CFE5',
          900: '#B3CFE5',
          950: '#B3CFE5',
        },
      },
      fontFamily: {
        'display': ['Exo 2', 'Rajdhani', 'sans-serif'],
        'body': ['Rajdhani', 'Exo 2', 'sans-serif'],
        'sans': ['Rajdhani', 'Exo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;