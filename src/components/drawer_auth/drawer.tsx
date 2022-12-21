import * as TB from'@tabler/icons'
import * as C from '@chakra-ui/react'
import * as Cus from 'components/common'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function DrawerAuth() {
  const { isOpen, onOpen, onClose } = C.useDisclosure()
  const [ auth, setAuth ] = useState( true )

  return (
    <>
      <C.IconButton
        bg='none'
        _active={{}}
        onClick={ onOpen }
        color='adobe.gray.1'
        aria-label='open left drawer'
        _hover={{ color: 'adobe.gray.2' }} 
        icon={ <TB.IconAlignLeft strokeWidth='3' size='20px' /> }
      />

      <C.Drawer
        placement='left'
        isOpen={ isOpen }
        onClose={ onClose }
      >
        <C.DrawerOverlay bg='rgba(191, 185, 184, 0.6)' />
        <C.DrawerContent
          h='min'
          ml={ 4 }
          mt={ 16 }
          maxW='2xs'
          rounded='sm'
        >
          <C.DrawerHeader>
            { auth ?
                <C.Stack>
                  <Cus.Card url='/profile/Kathy' icon={ <TB.IconUser size='16px' /> } mainText='Kathy' extraText='|Royal|' />
                  {/* <Cus.Card url='/clans/Royal' icon={ <TB.IconBookmark size='16px' /> } mainText='Royal' /> */}
                  <C.Button
                    as={ Link }
                    to='/signin'
                    fontFamily='Quicksand'
                    color='adobe.gray.2'
                    border='1px'
                    borderColor='adobe.gray.4'
                    bg='none'
                    _hover={{ borderColor: 'adobe.gray.3' }}
                    _active={{}}
                    rounded='sm'
                    fontSize='sm'
                    fontWeight='400'
                  >Xem tất cả clan</C.Button>
                  <C.Button
                    as={ Link }
                    to='/signin'
                    fontFamily='Quicksand'
                    color='adobe.gray.2'
                    border='1px'
                    borderColor='adobe.gray.4'
                    bg='none'
                    _hover={{ borderColor: 'adobe.gray.3' }}
                    _active={{}}
                    rounded='sm'
                    fontSize='sm'
                    fontWeight='400'
                  >Tạo clan</C.Button>
                </C.Stack>
              :
                <C.Stack>
                  <C.Button
                    as={ Link }
                    to='/signin'
                    fontFamily='Quicksand'
                    color='adobe.gray.2'
                    border='1px'
                    borderColor='adobe.gray.4'
                    bg='none'
                    _hover={{ borderColor: 'adobe.gray.3' }}
                    _active={{}}
                    rounded='sm'
                    fontSize='sm'
                    fontWeight='400'
                  >Đăng nhập</C.Button>
                  <C.Button
                    as={ Link }
                    to='/signup'
                    fontFamily='Quicksand'
                    color='adobe.gray.2'
                    border='1px'
                    borderColor='adobe.gray.4'
                    bg='none'
                    _hover={{ borderColor: 'adobe.gray.3' }}
                    _active={{}}
                    rounded='sm'
                    fontSize='sm'
                    fontWeight='400'
                  >Đăng kí</C.Button>
                </C.Stack>
            }
          </C.DrawerHeader>
          { auth && 
            <C.DrawerFooter>
              <C.Button
                bg='none'
                size='sm'
                border='1px'
                rounded='sm'
                fontWeight='400'
                color='adobe.gray.2'
                fontFamily='Quicksand'
                borderColor='adobe.gray.4'
                _hover={{ borderColor: 'adobe.gray.3' }} _active={{}}
              >
                Đăng xuất
              </C.Button>
            </C.DrawerFooter>
          }
        </C.DrawerContent>
      </C.Drawer>
    </>
  )
}