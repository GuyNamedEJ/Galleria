/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-1": ["56px", "64px"],
        "heading-2": ["24px", "29px"],
        "heading-3": ["18px", "22px"],
        "subhead-1": ["15px", "19px"],
        "subhead-2": ["13px", "17px"],
        "link-1": ["12px", "15px"],
        "link-2": ["9px", "11px"],
        "body-2": ["14px", "28px"],
        "display-mobile": ["100px", "100px"],
        "display-desktop": ["200px", "200px"],
      },
      colors: {
        "dark-grey": "#7D7D7D",
        grey: "#E5E5E5",
        "light-grey": "#F3F3F3",
      },
      screens: {
        'desktop' : '1440px'
      }
    },

    
  },
  plugins: [],
};
