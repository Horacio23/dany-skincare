import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      'xs': {'min': '100px', 'max': '400px'},
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        seasalt: { DEFAULT: '#FBFAF9', 100: '#3c3228', 200: '#786450', 300: '#ab9681', 400: '#d3c8bd', 500: '#fbfaf9', 600: '#fcfbfa', 700: '#fdfcfb', 800: '#fdfdfd', 900: '#fefefe' }, 
        old_rose: { DEFAULT: '#B8838C', 100: '#28171a', 200: '#502e34', 300: '#78454e', 400: '#a15c68', 500: '#b8838c', 600: '#c69da4', 700: '#d5b5ba', 800: '#e3ced1', 900: '#f1e6e8' },
        'rosy_brown': { DEFAULT: '#C7929A', 100: '#2e181b', 200: '#5c2f36', 300: '#894751', 400: '#b06671', 500: '#c7929a', 600: '#d3a9af', 700: '#debec3', 800: '#e9d4d7', 900: '#f4e9eb' }, 
        'misty_rose': { DEFAULT: '#FDE2E0', 100: '#5a0b06', 200: '#b4170c', 300: '#f23b2e', 400: '#f79088', 500: '#fde2e0', 600: '#fee9e8', 700: '#feefee', 800: '#fef4f3', 900: '#fffaf9' }, 
        'buff': { DEFAULT: '#EFBC8B', 100: '#422509', 200: '#854a12', 300: '#c76e1b', 400: '#e69448', 500: '#efbc8b', 600: '#f2c9a2', 700: '#f5d6b9', 800: '#f9e4d0', 900: '#fcf1e8' },
        'salmon_pink': { 
            DEFAULT: '#F799A5',
            100: '#4a060f',
            200: '#930c1e',
            300: '#dd122d',
            400: '#f14e63',
            500: '#f799a5',
            600: '#f8acb6',
            700: '#fac1c8',
            800: '#fcd5db',
            900: '#fdeaed'
        }, 
        'tearose': { 
            DEFAULT: '#F5C1C4',
            100: '#4b0c0f',
            200: '#97191f',
            300: '#dc2b34',
            400: '#e9767c',
            500: '#f5c1c4',
            600: '#f7ced0',
            700: '#f9dadc',
            800: '#fbe6e7',
            900: '#fdf3f3'
        },
        lf: {
          10: "#fee6e5",
          30: "#fdc8c7",
          50: "#efb7b9",
          80: "#f4b5b7",
          // 80: "#bg-red",
          90: "#926f73",
        },
        sc: {
          10: "#fee6e5",
          30: "#fdc8c7",
          50: "#efb7b9",
          80: "#f4b5b7",
          // 80: "#141414",
          90: "#926f73",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#cacaca",
          // DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config