/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#14f4a9",
        customSecondary: "#c461c4",
        customDarkBg1: "#1c0b50",
        customDarkBg2: "#2d3169",
        customDarkBg3: "#36509c",
        customDarkBg3Hover: "rgb(55, 56, 62)",
        customContentSubtitle: "#14f4a9",
        customGrayBorder: "rgb(255,255,255,0.1  )",
        customGrayText: "#14f4a9",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};
