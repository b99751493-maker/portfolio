import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#07090a',
        coal: '#0d1112',
        ivory: '#f4efe4',
        lime: '#c6ff3d',
        emerald: { ...colors.emerald, DEFAULT: '#0f6b4f' }, // 13 ta sahifa emerald-100..900 ishlatadi
        silver: '#9aa3a6',
        chrome: '#d9dfe1',
        ember: '#ff7a2f',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        // --- 13 ta loyiha sahifalari uchun shriftlar ---
        poppins: ['"Poppins"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        lato: ['"Lato"', 'sans-serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
        nunito: ['"Nunito"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        archivo: ['"Archivo"', 'sans-serif'],
        sourceserif: ['"Source Serif 4"', 'serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        rajdhani: ['"Rajdhani"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        merriweather: ['"Merriweather"', 'serif'],
        lora: ['"Lora"', 'serif'],
        fraunces: ['"Fraunces"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(198,255,61,0.35)',
      },
    },
  },
  plugins: [],
}
