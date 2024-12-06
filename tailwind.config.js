/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./publish/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    theme: {
        fontFamily: {
            sans: [
                'ui-sans-serif',
                'system-ui',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
            ],
            vazir: ['Vazir', 'sans-serif'],

        }
    }
}