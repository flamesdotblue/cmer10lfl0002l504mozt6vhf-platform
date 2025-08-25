import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0b0c10',
          800: '#0f1117',
          700: '#12141c'
        },
        primary: {
          500: '#6ee7ff',
          600: '#67d2ff',
          700: '#58b5ff'
        },
        accent: {
          500: '#c084fc',
          600: '#a855f7'
        }
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(1200px 600px at 80% 20%, rgba(110,231,255,0.15), transparent 60%), radial-gradient(800px 400px at 20% 80%, rgba(192,132,252,0.12), transparent 60%)',
        'glass': 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))'
      },
      boxShadow: {
        glass: '0 10px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)'
      }
    },
  },
  plugins: [],
}
export default config
