/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "emerald-500"
          }
        }
      },
      animation: {
        typing: "typing 3s steps(100) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#EFFBE3",    // Your custom primary color
          secondary: "#f6d860",  // Example secondary color (customize as needed)
          accent: "#37cdbe",     // Example accent color
          neutral: "#3d4451",    // Neutral
          "base-100": "#EFFBE3", // Background color
        },
      },
      "dark",  // Keep dark theme if needed
    ],
  },
};
