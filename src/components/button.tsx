import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  bg: 'none',
  border: '1px',
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
  bg: 'none',
  rounded: 'sm',
  boxShadow: 'md',
  fontWeight: '400',
  color: 'adobe.gray.2',
  fontFamily: 'Quicksand',
  _hover: { boxShadow: 'base' },
})

export const buttonTheme = defineStyleConfig({
  variants: { outline, shadow }
})