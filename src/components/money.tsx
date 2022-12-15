import * as TB from '@tabler/icons'
import * as C from '@chakra-ui/react'

export default function Money() {
  return (
    <C.Button
      bg='none'
      boxShadow='base'
      color='adobe.pink.1'
      fontFamily='Quicksand'
      _hover={{}} _active={{}} 
      leftIcon={ <TB.IconCoin size='18px' color='#C0CADC' /> }
    >
      42.134
    </C.Button>
  )
}