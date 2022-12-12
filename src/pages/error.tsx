import * as C from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: any = useRouteError()

  return (
    <C.Flex
      minH='100vh'
      align='center'
      justify='center'
    >
      <C.Stack 
        w='md'
        p={ 6 }
        rounded='md'
        boxShadow='base'
      >
        <C.Heading
          size='lg'
          fontWeight='300'
          color='adobe.gray.2'
          fontFamily='Quicksand'
        >
          Đã có sự cố xảy ra
        </C.Heading>
        <C.Text
          fontWeight='600'
          color='adobe.gray.2'
          fontFamily='Quicksand'
        >
          { error.statusText || error.message }
        </C.Text>
      </C.Stack>
    </C.Flex>
  )
}