import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonColorGreen: '#26a17b', // Custom color for buttons
        buttonColorGray: '#999',
        buttonColorYellow: '#ffaa09',
      },

      screens: {
        'iphone6': '375px', // Custom breakpoint for iPhone 6
      },

    },
  },
  plugins: [],
} satisfies Config

