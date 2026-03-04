/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#FAF6F1',
                surface: '#FFFFFF',
                card: '#FFFFFF',
                ink: '#2C2118',
                muted: '#7A6B5D',
                brand: {
                    DEFAULT: '#C8915A',
                    dark: '#A87240',
                    deep: '#5C3A1E',
                },
                line: '#E8DFD4',
                success: '#2D8659',
                tag: {
                    bg: '#F0E8DD',
                    text: '#6B513A',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['DM Serif Display', 'serif'],
            }
        },
    },
    plugins: [],
}
