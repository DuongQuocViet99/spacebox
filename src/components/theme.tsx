import { inputTheme } from 'components/input'
import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from 'components/button'
import { switchTheme } from 'components/switch'
import { checkboxTheme } from 'components/checkbox'
import { accordionTheme } from 'components/accordion'

export const theme = extendTheme({
  colors: {
    adobe: {
      gray: {
        1: '#88898C',
        2: '#6E6F73',
        3: '#D9D9D9',
        4: '#E6E6E6',
        5: '#A0A4A9'
      },
      cyan: {
        1: '#3DD1F2',
        2: '#5CF2E3'
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
    Input: inputTheme,
    Button: buttonTheme,
    Switch: switchTheme,
    Checkbox: checkboxTheme,
    Accordion: accordionTheme
  }
})