import * as C from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface Iprops {
  url: string,
  icon: JSX.Element,
  mainText: string,
  extraText?: string
}

export default function Card({ url, icon, mainText, extraText }: Iprops ) {
  return (
    <C.HStack
      as={ Link }
      to={ url }
      p={ 2 }
      rounded='md'
      spacing={ 4 }
      boxShadow='base'
      _hover={{ boxShadow: 'md' }}
    >
      <C.Circle
        size='30px'
        color='white'
        bg='adobe.pink.1'
      >
        { icon }
      </C.Circle>
      <C.HStack
        spacing={ 1 }
        fontFamily='Quicksand'
      >
        <C.Text
          fontSize='md'
          fontWeight='300'
          color='adobe.gray.2'
        >
          { mainText }
        </C.Text>
        <C.Text
          fontSize='sm'
          fontWeight='700'
          color='adobe.gray.5'
        >
          { extraText }
        </C.Text>
      </C.HStack>
    </C.HStack>
  )
}