import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers( accordionAnatomy.keys )

const baseStyle = definePartsStyle({
  container: { border: 'none' },
  button: {
    p: '3',
    rounded: 'sm',
    fontSize: 'sm',
    boxShadow: 'base',
    fontWeight: '500',
    color: 'adobe.gray.2',
    fontFamily: 'Quicksand',
    _expanded: { boxShadow: 'md' },
    _hover: { bg: 'none', boxShadow: 'md' }
  },
  panel: { p: '3' }
})

export const accordionTheme = defineMultiStyleConfig({ baseStyle })