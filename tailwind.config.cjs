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
            fontFamily: {
                "tauri-hero": ["Tauri"],
            },
        },
    },
    plugins: [],
};

// For hero Text
// font-family: 'Tauri';
// line-height: 120px;
// background: linear-gradient(180deg, rgba(255, 0, 0, 0.75) 32.92%, rgba(255, 141, 36, 0.75) 108.44%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
