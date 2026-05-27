/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'slide-1': 'slideshow 24s infinite',
        'slide-2': 'slideshow 24s infinite 6s',
        'slide-3': 'slideshow 24s infinite 12s',
        'slide-4': 'slideshow 24s infinite 18s',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideshow: {
          '0%, 20%': { opacity: '1' },
          '25%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}