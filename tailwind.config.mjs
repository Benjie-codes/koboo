/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"]
      },
      colors: {
        background: "#EAEBED", // Primary
        surface: "#EAEBED",
        ink: "#423B0B", // Accent as ink/text for high contrast
        secondary: "#474935",
        muted: "rgba(66, 59, 11, 0.6)", // #423B0B with opacity
        accent: "#423B0B",
        accentSoft: "rgba(66, 59, 11, 0.1)"
      },
      maxWidth: {
        prose: "64rem"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both"
      }
    }
  },
  plugins: []
};
