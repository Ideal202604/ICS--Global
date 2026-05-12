/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "var(--primary-1)",
        "primary-3": "var(--primary-3)",
        "primary-4": "var(--primary-4)",
        "primary-100": "var(--primary-100)",
        "neutral-600": "var(--neutral-600)",
        "neutral-700": "var(--neutral-700)",
        "neutral-900": "var(--neutral-900)",
      },
      fontFamily: {
        "body-large-semibold": "var(--body-large-semibold-font-family)",
        "body-small-medium": "var(--body-small-medium-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
        "embed-figma-com-inter-medium":
          "var(--embed-figma-com-inter-medium-font-family)",
        "embed-figma-com-inter-semi-bold":
          "var(--embed-figma-com-inter-semi-bold-font-family)",
      },
      boxShadow: {
        "shadow-sm": "var(--shadow-sm)",
      },
    },
  },
  plugins: [],
};
