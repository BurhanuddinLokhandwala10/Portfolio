/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: '#08090D',
          light: '#FAFAFA',
        },
        surface: {
          dark: '#10121A',
          light: '#FFFFFF',
        },
        surfaceElevated: {
          dark: '#161924',
          light: '#F4F4F6',
        },
        borderSubtle: {
          dark: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(0, 0, 0, 0.08)',
        },
        borderActive: {
          dark: 'rgba(255, 255, 255, 0.18)',
          light: 'rgba(0, 0, 0, 0.20)',
        },
        emerald: {
          glow: '#10B981',
          accent: '#34D399',
        },
        cyan: {
          glow: '#06B6D4',
          accent: '#22D3EE',
        },
        indigo: {
          glow: '#6366F1',
          accent: '#818CF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow': 'flow 3s ease-in-out infinite',
      },
      keyframes: {
        flow: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
};

