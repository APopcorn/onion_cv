/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/src/assets/TestFormatsCut.png')",
            },
            colors: {
                "hero-white": "#FFFFFF",
                "hero-pink": "#FFD7D7",
                "hero-orange": "#FF8D24",
                "hero-red": "rgba(255, 117, 73, 1)",
                "navbar-black": "#000000",
                "navbar-blue": "#98CCEF",
                "hero-text": "#565656",
            },
        },
    },
    plugins: [],
};
