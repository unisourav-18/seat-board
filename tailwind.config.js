/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f7faf8",
        card: "#ffffff",
        text: "#0f172a",
        muted: "#6b7280",
        line: "#e7efe9",

        brand: "#1a7d47",
        "brand-700": "#13663a",
        "brand-50": "#eaf7ef",
        mint: "#35d07a",
      },
      borderRadius: {
        xl: "18px",
        lg: "14px",
      },
      boxShadow: {
        card: "0 12px 30px rgba(2,6,23,0.08)",
        soft: "0 10px 25px rgba(2,6,23,0.06)",
        brand: "0 10px 18px rgba(26,125,71,.22)",
      },
      backdropBlur: {
        glass: "10px",
      },
      fontSize: {
        xs2: "12px",
        sm2: "13px",
      },
    },
  },
  plugins: [],
}
