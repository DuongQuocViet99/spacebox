import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers( switchAnatomy.keys )

const baseStyle = definePartsStyle({
  track: {
    bg: 'adobe.gray.4',
    _checked: {
      bg: 'adobe.pink.1',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })