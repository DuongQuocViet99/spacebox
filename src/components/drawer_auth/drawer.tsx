import { useState } from 'react'
import * as TB from'@tabler/icons'
import * as C from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import * as Cus from 'components/common'

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
                  <Cus.BtnOutline as={ Link } to='/clans'>Xem tất cả clan</Cus.BtnOutline>
                  <Cus.BtnOutline as={ Link } to='/createclan'>Tạo clan</Cus.BtnOutline>
                </C.Stack>
              :
                <C.Stack>
                  <Cus.BtnOutline as={ Link } to='/signin'>Đăng nhập</Cus.BtnOutline>
                  <Cus.BtnOutline as={ Link } to='/signup'>Đăng kí</Cus.BtnOutline>
                </C.Stack>
            }
          </C.DrawerHeader>
          { auth && 
            <C.DrawerFooter>
              <Cus.BtnOutline size='sm'>
                Đăng xuất
              </Cus.BtnOutline>
            </C.DrawerFooter>
          }
        </C.DrawerContent>
      </C.Drawer>
    </>
  )
}