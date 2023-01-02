import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  rounded: 'sm',
  fontSize: 'sm',
  fontWeight: '400',
  color: 'adobe.gray.2',
  fontFamily: 'Quicksand',
  borderColor: 'adobe.gray.4',
  _active: { bg: 'none' },
  _hover: { bg: 'none', borderColor: 'adobe.gray.3' }
})

const shadow = defineStyle({
  rounded: 'sm',
  fontSize: 'sm',
  boxShadow: 'lg',
  fontWeight: '400',
  letterSpacing: 'wide',
  color: 'adobe.gray.2',
  fontFamily: 'Quicksand',
  _hover: { boxShadow: 'base' },
})

const solid = defineStyle({
  bg: 'none',
  fontFamily: 'Quicksand',
  _hover: { bg: 'none' },
  _active: { bg: 'none' }
})

export const buttonTheme = defineStyleConfig({
  variants: { outline, shadow, solid }
})