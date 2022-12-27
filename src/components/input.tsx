import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers( inputAnatomy.keys )

const unstyled = definePartsStyle({
  field: {
    py: '2',
    px: '4',
    border: '1px',
    rounded: 'sm',
    fontSize: 'sm',
    fontWeight: '500',
    color: 'adobe.gray.2',
    fontFamily: 'Quicksand',
    borderColor: 'adobe.gray.4',
    _hover: { borderColor: 'adobe.gray.3' },
    _focus: { borderColor: 'adobe.gray.3' }
  }
})

export const inputTheme = defineMultiStyleConfig({
  variants: { unstyled }
})