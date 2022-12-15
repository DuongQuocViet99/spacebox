import * as TB from '@tabler/icons'
import * as C from '@chakra-ui/react'

export default function Premium() {
  return (
    <C.HStack
      p={ 2 }
      rounded='md'
      boxShadow='base'
    >
      <TB.IconKeyframe color='#FAC8CE' />
      <C.Switch size='sm' />
    </C.HStack>
  )
}