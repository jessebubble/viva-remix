import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                spursTurq: '#00b2a9',
                spursPink: '#ef426f',
                spursOrange: '#ff8200',
                centroGreen: '#ACDB6B',
                centroYellow: '#FACB11',
                centroBlue: '#1DB7BA',
                centroPink: '#F13F6D',
                centroOrange: '#F89225',
                centroPurple: '#6f42c1',
                centroRed: '#dc3545',
                centroIndigo: '#6610f2',
                centroTeal: '#20c997',
                centroCyan: '#0dcaf0',
                cosaWhite: '#EEEEEE',
                cosaGrey: '#333333',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/aspect-ratio'),
    ],
} satisfies Config;
