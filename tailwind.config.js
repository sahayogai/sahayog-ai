/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c3bed",
        "primary-dark": "#6d28d9",
        secondary: "#8b5cf6",
        accent: "#c4b5fd",
        ink: "#0f172a",
        muted: "#6b7280",
        surface: "#ffffff",
        "surface-soft": "#f9fafb",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(to bottom right, #8b5cf6, #7c3bed, #c4b5fd)",
        "gradient-btn":
          "linear-gradient(to right, #8b5cf6, #7c3bed)",
        "gradient-btn-hover":
          "linear-gradient(to right, #7c3bed, #6d28d9)",
      },
      boxShadow: {
        card: "0 2px 8px 0 rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
}
