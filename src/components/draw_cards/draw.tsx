import * as TB from '@tabler/icons'
import * as C from '@chakra-ui/react'
import * as Cus from 'components/common'

export default function DrawCard() {
  const { isOpen, onOpen, onClose } = C.useDisclosure()

  return (
    <>
      <C.IconButton
        bg='none'
        _active={{}}
        onClick={ onOpen }
        color='adobe.gray.1'
        aria-label='open draw cards'
        _hover={{ color: 'adobe.gray.2' }} 
        icon={ <TB.IconCards size='20px' strokeWidth='1' /> }
      />

      <C.Modal
        isCentered
        isOpen={ isOpen }
        onClose={ onClose }
        motionPreset='slideInRight'
      >
        <C.ModalOverlay bg='rgba(191, 185, 184, 0.6)' />
        <C.ModalContent>
          <C.ModalBody>
            <C.SimpleGrid 
              columns={ 2 } 
              spacing={ 6 }
            >
              <Cus.GetCard />
              <C.Stack>
                <Cus.CategoryRender render={( i, k ) => 
                  <C.HStack
                    key={ k }
                    p={ 1 }
                    rounded='md'
                    boxShadow='base'
                    color='adobe.gray.2'
                    fontFamily='Quicksand'
                  >
                    <C.Circle size='7px' className={ i.class } />
                    <C.Text>{ i.name }</C.Text>
                    <C.Spacer />
                    <C.Text fontWeight='700'>{ i.percent }%</C.Text>
                  </C.HStack>
                }/>
              </C.Stack>
            </C.SimpleGrid>
          </C.ModalBody>
        </C.ModalContent>
      </C.Modal>
    </>
  )
}