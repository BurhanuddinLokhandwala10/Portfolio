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
        bg: '#07090F',
        'bg-elevated': '#0E1220',
        glass: 'rgba(255, 255, 255, 0.04)',
        border: 'rgba(255, 255, 255, 0.10)',
        'border-hover': 'rgba(124, 140, 255, 0.45)',
        text: '#F3F4F8',
        'text-muted': '#9AA0B4',
        accent: '#7C8CFF',
        'accent-deep': '#2B3380',
        'btn-light': '#E9ECFF',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        pill: '999px',
        chip: '12px',
      },
      keyframes: {
        'caret-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'mouse-dot': {
          '0%': { transform: 'translateY(0px)', opacity: '1' },
          '50%': { transform: 'translateY(6px)', opacity: '0.3' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1s steps(2, start) infinite',
        'mouse-dot': 'mouse-dot 2s ease-in-out infinite',
        'marquee-left': 'marquee-left 35s linear infinite',
        'marquee-right': 'marquee-right 45s linear infinite',
      },
    },
  },
  plugins: [],
}
