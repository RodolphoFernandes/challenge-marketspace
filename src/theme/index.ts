import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    blue: {
      900: '#364D9D'
    },
    lightBlue: {
      700: '#647AC7'
    },
    red: {
      400: '#EE7979'
    },
    gray: {
      900: '#1A181B',
      800: '#3E3A40',
      600: '#5F5B62',
      500: '#9F9BA1',
      300: '#D9D8DA',
      200: '#EDECEE',
      100: '#F7F7F8'
    }
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular',
  },
  fontSizes: {
    "xs": 12,
    "sm": 14,
    "md": 16,
    "lg": 18,
    "xl": 20,
    "2xl": 24,    
  },
  sizes: {
    11: 45,
    14: 56,
    17: 68,
    18: 76,
    28: 109,
    33: 148
  }
})