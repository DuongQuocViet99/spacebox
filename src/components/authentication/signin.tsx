import * as C from '@chakra-ui/react'

export default function SignIn() {
  const { isOpen, onOpen, onClose } = C.useDisclosure()

  return (
    <>
      <C.Button variant='outline' onClick={ onOpen }>
        Đăng nhập
      </C.Button>

      <C.Modal
        isOpen={ isOpen }
        onClose={ onClose }
        motionPreset='slideInBottom'
      >
        <C.ModalOverlay bg='rgba(191, 185, 184, 0.6)' />
        <C.ModalContent rounded='sm' w='sm'>
          <C.ModalHeader
            fontWeight='400'
            color='adobe.gray.2'
            fontFamily='Quicksand'
          >
            Đăng nhập
          </C.ModalHeader>
          <C.ModalBody>
            <C.Stack>
{/* username */}
              <C.Input
                type='text'
                variant='unstyled'
                placeholder='Tài khoản'
              />
{/* password */}
              <C.Input
                variant='unstyled'
                type='password'
                placeholder='Mật khẩu'
              />
            </C.Stack>
          </C.ModalBody>
          <C.ModalFooter>
            <C.Button variant='shadow' size='sm'>
              Đăng nhập
            </C.Button>
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  )
}