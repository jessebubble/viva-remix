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
                cosaRed: '#8B0E04',
                cosaRose: '#CF4240',
                cosaBrown: '#551900',
                cosaTeal: '#038391',
                cosaBlue: '#A1CBC9',
                cosaWhite: '#EEEEEE',
                cosaGrey: '#333333',
                cosaPink: '#E00490',
                cosaGreen: '#09B081',
                cosaGold: '#F7D002',
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