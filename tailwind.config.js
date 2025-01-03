const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
         background:"#0F0F0F",
         primary:"#F97300",
         slate: {
          50: '#f8fafc',    // Very light slate gray
          100: '#f1f5f9',   // Light slate gray
          200: '#e2e8f0',   // Slightly darker light slate gray
          300: '#cbd5e1',   // Medium-light slate gray
          400: '#94a3b8',   // Medium slate gray
          500: '#64748b',   // Darker medium slate gray
        },

      },
      backgroundImage:{
        bg_hero:'url(/svg/cccoil.svg)'
      }
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}