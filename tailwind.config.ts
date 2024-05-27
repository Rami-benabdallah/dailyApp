import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.mdx",
    "./stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  theme: {
  },
  plugins: [
    require('daisyui')
  ],

};
export default config;
