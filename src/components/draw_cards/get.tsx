import * as TB from '@tabler/icons'
import * as C from '@chakra-ui/react'
import * as Cus from 'components/common'

export default function GetCard() {
  const { isOpen, onOpen, onClose } = C.useDisclosure()

  return (
    <>
      <C.Center
        onClick={ onOpen }
        cursor='pointer'
        boxShadow='base'
        fontFamily='Quicksand'
        transitionProperty='letter-spacing text-indent'
        transitionDuration='0.4s'
        textIndent={ isOpen ? '10px' : '2px' }
        letterSpacing={ isOpen ? '10px' : '2px' }
        _hover={{ letterSpacing: '10px', textIndent: '10px', boxShadow: 'xl' }}
      >
        <C.VStack>
          <C.Text
            fontSize='2xl'
            color='adobe.gray.2'
          > Lật </C.Text>
          <C.Divider borderColor='adobe.gray.3' w='58px' />
          <C.Text
            fontWeight='300'
            color='adobe.gray.5'
          > -100 </C.Text>
        </C.VStack>
      </C.Center>

      <C.Modal
        isCentered
        isOpen={ isOpen } 
        onClose={ onClose }
      >
        <C.ModalOverlay bg='rgba(166, 161, 161, 0.6)' />
        <C.ModalContent
          bg='none'
          w='fit-content'
          boxShadow='none'
          backdropFilter='blur(1px)'
        >
          <C.ModalHeader textAlign='center'>
            <Cus.InfoCard />
          </C.ModalHeader>
          <C.ModalBody>
            <C.Square
              size='100px'
              border='2px'
              rounded='md'
              color='white'
              boxShadow='xl'
              backdropFilter='blur(2px)'
              className='borderInfinity'
            >
              <TB.IconHourglassEmpty />
            </C.Square>
          </C.ModalBody>
          <C.ModalFooter>
            <C.Spacer />
              <C.IconButton
                size='sm'
                color='white'
                rounded='full'
                aria-label='close'
                bg='whiteAlpha.400'
                onClick={ onClose }
                _hover={{}} _active={{}}
                icon={ <TB.IconX strokeWidth='3' size='20px' /> }
              />
            <C.Spacer />
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  )
}