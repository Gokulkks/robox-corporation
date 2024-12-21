import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       neutral: "#6B69FF",
       button:"#4A48FF",
       stone:"#88909C",
       footer:"#5F6A7A",
       footer1:"#223147",
    
      },
      fontFamily:{
        display:['Barlow'],
        normal:['Mulish'],
      }
    },
  },
  plugins: [],
} satisfies Config;
