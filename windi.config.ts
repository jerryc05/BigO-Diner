import { defineConfig } from 'windicss/helpers'
// import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [plugin(({ addUtilities }) => {
    addUtilities({
      '.h-inherit': {
        height: 'inherit',
      },
      '.w-inherit': {
        width: 'inherit',
      },
      '.w-full-1': {
        width: 'calc(100% - .25rem)',
      },
      '.h-full-1': {
        height: 'calc(100% - .25rem)'
      },
    })
  }),
  require('windicss/plugin/aspect-ratio'),
  require('windicss/plugin/filters'),
  require('windicss/plugin/forms'),
  require('windicss/plugin/line-clamp'),
  require('windicss/plugin/scroll-snap'),
  require('windicss/plugin/typography'),
  ],
})
