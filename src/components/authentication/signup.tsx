import * as C from '@chakra-ui/react'

export const SignUp = () => {
  const { isOpen, onOpen, onClose } = C.useDisclosure()

  return (
    <>
      <C.Button variant='outline' onClick={ onOpen }>
        Đăng kí
      </C.Button>

      <C.Modal
        isOpen={ isOpen }
        onClose={ onClose }
        motionPreset='slideInBottom'
      >
        <C.ModalOverlay bg='rgba(191, 185, 184, 0.6)' />
        <C.ModalContent rounded='sm'>
          <C.ModalHeader
            fontWeight='400'
            color='adobe.gray.2'
            fontFamily='Quicksand'
          >
            Đăng kí
          </C.ModalHeader>
          <C.ModalBody>
            <C.Stack fontFamily='Quicksand'>
{/* username */}
              <C.FormControl>
                <C.FormLabel
                  fontSize='sm'
                  fontWeight='700'
                  color='adobe.gray.2'
                >
                  Tên tài khoản
                </C.FormLabel>
                <C.Input variant='unstyled' type='text' />
                <C.FormHelperText
                  fontSize='xs'
                  fontWeight='600'
                  color='adobe.gray.1'
                  letterSpacing='wide'
                >
                  - Tên tài khoản không được chứa kí tự
                </C.FormHelperText>
                <C.FormHelperText
                  fontSize='xs'
                  fontWeight='600'
                  color='adobe.gray.1'
                  letterSpacing='wide'
                >
                  - Tên tài khoản không được hoàn toàn là số
                </C.FormHelperText>
              </C.FormControl>
{/* name */}
              <C.FormControl>
                <C.FormLabel
                  fontSize='sm'
                  fontWeight='700'
                  color='adobe.gray.2'
                >
                  Tên người dùng
                </C.FormLabel>
                <C.Input variant='unstyled' type='text' />
                <C.FormHelperText
                  fontSize='xs'
                  fontWeight='600'
                  color='adobe.gray.1'
                  letterSpacing='wide'
                >
                  - Tên người dùng tối đa 24 kí tự
                </C.FormHelperText>
                <C.FormHelperText
                  fontSize='xs'
                  fontWeight='600'
                  color='adobe.gray.1'
                  letterSpacing='wide'
                >
                  - Tên người dùng không được chứa kí tự
                </C.FormHelperText>
              </C.FormControl>
{/* password */}
              <C.FormControl>
                <C.FormLabel
                  fontSize='sm'
                  fontWeight='700'
                  color='adobe.gray.2'
                >
                  Mật khẩu
                </C.FormLabel>
                <C.Input variant='unstyled' type='password' />
                <C.FormHelperText
                  fontSize='xs'
                  fontWeight='600'
                  color='adobe.gray.1'
                  letterSpacing='wide'
                >
                  - Mật khẩu tối thiểu 6 kí tự, tối đa 24 kí tự
                </C.FormHelperText>
              </C.FormControl>
{/* Confirm password */}
              <C.FormControl>
                <C.FormLabel
                  fontSize='sm'
                  fontWeight='700'
                  color='adobe.gray.2'
                >
                  Xác nhận mật khẩu
                </C.FormLabel>
                <C.Input variant='unstyled' type='password' />
              </C.FormControl>
            </C.Stack>
          </C.ModalBody>

          <C.ModalFooter>
            <C.Button variant='shadow' size='sm'>
              Đăng kí
            </C.Button>
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  )
}