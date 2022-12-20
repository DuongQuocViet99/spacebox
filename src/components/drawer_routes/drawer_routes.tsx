import * as TB from'@tabler/icons'
import * as C from '@chakra-ui/react'
import * as Cus from 'components/common'

export default function DrawerRoutes() {
  const { isOpen, onOpen, onClose } = C.useDisclosure()
  const [ show, setShow ] = C.useBoolean( false )

  return (
    <>
      <C.IconButton
        bg='none'
        color='adobe.gray.1'
        aria-label='open drawer routes'
        onClick={() => { onOpen(); setShow.on() }}
        icon={ <TB.IconChevronRight strokeWidth='1' size='20px' /> }
        _active={{}} _hover={{ color: 'adobe.gray.2' }} 
        transform={ show ? 'rotate(90deg)' : 'rotate(0deg)' }
      />

      <C.Drawer
        placement='left'
        isOpen={ isOpen }
        onClose={ onClose }
        onCloseComplete={ setShow.off }
      >
        <C.DrawerOverlay bg='rgba(191, 185, 184, 0.6)' />
        <C.DrawerContent
          h='min'
          ml={ 4 }
          mt={ 16 }
          rounded='sm'
          bg='adobe.brown.2'
          maxW='fit-content'
        >
          <C.VStack
            p={ 1 }
            py={ 6 }
          >
            <Cus.DrawerRoutesRender render={( i, k ) =>
              <C.VStack key={ k }>
                <Cus.IconButtonRoute
                  to={ i.url }
                  icon={ i.icon }
                />
                { k !== 5 ? <C.Divider w='12px' borderColor='adobe.brown.1' rounded='full' /> : <></> }
              </C.VStack>
            }/>
          </C.VStack>
        </C.DrawerContent>
      </C.Drawer>
    </>
  )
}