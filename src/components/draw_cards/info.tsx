import * as TB from '@tabler/icons'
import * as C from '@chakra-ui/react'
import * as Cus from 'components/common'

export default function InfoCard() {
  return (
    <C.Popover>
      {({ onClose }) => (
        <>
          <C.PopoverTrigger>
            <C.IconButton
              size='sm'
              rounded='md'
              color='white'
              aria-label='close'
              bg='whiteAlpha.400'
              _hover={{}} _active={{}}
              icon={ <TB.IconQuestionMark size='20px' strokeWidth='3' /> }
            />
          </C.PopoverTrigger>
          <C.PopoverContent
            w='sm'
            bg='none'
            border='none'
            boxShadow='none'
          >
            <C.PopoverHeader
              p={ 0 }
              border='none'
              textAlign='right'
            >
              <C.IconButton
                mb={ 1 }
                size='xs'
                color='white'
                rounded='full'
                aria-label='close'
                bg='whiteAlpha.400'
                onClick={ onClose }
                _hover={{}} _active={{}}
                icon={ <TB.IconX strokeWidth='3' size='16px' /> }
              />
            </C.PopoverHeader>
            <C.PopoverBody bg='white' rounded='md'>
            <C.UnorderedList
              fontSize='sm'
              textAlign='left'
              color='adobe.gray.2'
              fontFamily='Quicksand'
            >
              <Cus.InfoCardRender render={( i, k ) => 
                <C.ListItem key={ k }>
                  <C.HStack align='start'>
                    <C.Text as='i' fontWeight='700' minW='fit-content'>{ i.name }</C.Text>
                    <C.Text fontWeight='400'>{ i.value }</C.Text>
                  </C.HStack>
                </C.ListItem>
              }/>
            </C.UnorderedList>
            </C.PopoverBody>
          </C.PopoverContent>
        </>
      )}
    </C.Popover>
  )
}