import * as TB from '@tabler/icons'
import * as C from '@chakra-ui/react'

export default function Money() {
  return (
    <C.HStack px={ 4 }>
      <TB.IconCoin size='18px' color='#C0CADC' />
      <C.Text
        fontSize='sm'
        color='adobe.gray.2'
        letterSpacing='wider'
        fontFamily='Quicksand'
      >
        42.134
      </C.Text>
    </C.HStack>
  )
}