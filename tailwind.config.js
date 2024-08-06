/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      padding:{
        navPad:'0px 32px 0px 32px'
      },
     

    },
  },
  plugins: [],
}

