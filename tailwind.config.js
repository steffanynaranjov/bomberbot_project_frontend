module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/images/Diseno.png')",
        "hero-banner": "url('/src/images/banner.png')",
      }),
      colors: {
        "bom-blue": "#00fffb",
        "bom-green": "#7ed957",
        "bom-orange": "#ff914d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
