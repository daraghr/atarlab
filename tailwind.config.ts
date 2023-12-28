import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img1': 'url(/img1.jpg)'
      },
      colors: {
        blue: '#21629F',
        grey: '#676767'
      },
    },
    
  },
  plugins: [],
  
}
export default config
