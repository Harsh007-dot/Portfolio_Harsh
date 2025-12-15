module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cyberbg: '#0b0b0b',
        neonred: '#ff003c'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sharemono: ['Share Tech Mono', 'monospace']
      }
    }
  },
  plugins: []
}
