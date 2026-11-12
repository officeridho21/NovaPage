/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#091642',
          900: '#060f30',
          800: '#091642',
          700: '#10215a',
        },
        mist: '#eef2f6',
        ink: '#0d1020',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        floaty: 'floaty 2.4s ease-in-out infinite',
        rise: 'rise 0.9s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
}
