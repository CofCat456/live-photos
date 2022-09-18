module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        "photo-primary": "#FFDF65",
        "photo-secondary": "#636057",
        "photo-sp": "#FF785E",
        "photo-button": "#858377",
        "photo-font": "#494846",
        "photo-font2": "#373A3C",
      },
      boxShadow: {
        photo: "0 0 8px 0 rgba(73, 72, 70, 0.15)",
      },
    },
  },
  plugins: [],
};
