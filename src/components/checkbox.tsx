import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers( checkboxAnatomy.keys )

const baseStyle = definePartsStyle({
  control: {
    borderColor: 'adobe.gray.4',
    _checked: {
      bg: 'adobe.pink.1',
      borderColor: 'adobe.pink.1',
      _hover: {
        bg: 'adobe.pink.1',
        borderColor: 'adobe.pink.1',
      }
    },
  },
  label: {
    color: 'adobe.gray.1',
    fontFamily: 'Quicksand',
  }
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })