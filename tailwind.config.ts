import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      colors: {
        night: "#050505",
        neon: "#0ef9f9",
        magenta: "#ff4ecd"
      },
      backgroundImage: {
        "noise-texture": "radial-gradient(circle at center, rgba(14,249,249,0.15), rgba(5,5,5,0.9))"
      }
    }
  },
  plugins: []
};

export default config;
