import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gold": "#D4AF37",
        "light-gold": "#FFD700",
        "dark-gold": "#B8960C",
      },
      fontFamily: {
        playfair: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8960C 100%)",
        "gradient-gold-dark": "linear-gradient(135deg, #B8960C 0%, #D4AF37 100%)",
      },
      boxShadow: {
        gold: "0 4px 20px rgba(212, 175, 55, 0.3)",
        "gold-lg": "0 8px 40px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
