module.exports = {
  content: ["./*.html"], // Ye line sabse zaroori hai
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#040614',
          900: '#060a1e',
          850: '#070d24',
          800: '#0b1230',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124, 58, 237, 0.25), 0 0 40px rgba(59, 130, 246, 0.18)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}