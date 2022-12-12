import { extendTheme } from '@chakra-ui/react'
import { switchTheme } from './switch'

export const theme = extendTheme({
  colors: {
    adobe: {
      gray: {
        1: '#88898C',
        2: '#6E6F73',
        3: '#D9D9D9',
        4: '#E6E6E6'
      },
      cyan: {
        1: '#3DD1F2'
      },
      brown: {
        1: '#BFB9B8',
        2: '#A6A1A1'
      },
      pink: {
        1: '#FAC8CE'
      }
    }
  },
  components: {
    Switch: switchTheme
  }
})