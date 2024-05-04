tailwind.config = {
  theme: {
    extend: {
      colors: {
        background: '#FFFDEF',
        text: '#313131',
        accent: '#E5E1BF',
        idk: '#FCF8E5'
      },
      fontFamily: {
        'sans': ['Quando', 'sans-serif'],
        'serif': ['Judson', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    }
  }
}