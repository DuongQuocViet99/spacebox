import * as C from '@chakra-ui/react'
import * as Cus from 'components/common'

export default function Header() {
  return (
    <C.HStack
      p={ 4 }
      top='0'
      spacing={ 4 }
      position='sticky'
    >
{/* Drawer auth */}
      <Cus.DrawerAuth />
      <C.Divider
        h='12px'
        rounded='full'
        orientation='vertical'
        borderColor='adobe.gray.3'
      />
{/* Drawer routes */}
      <Cus.DrawerRoutes />
      <C.Divider
        h='12px'
        rounded='full'
        orientation='vertical'
        borderColor='adobe.gray.3'
      />
{/* Draw card */}
      <Cus.DrawCard />
      <C.Spacer />
{/* Premium */}
      <Cus.Premium />
      <C.Divider
        h='12px'
        rounded='full'
        orientation='vertical'
        borderColor='adobe.gray.3'
      />
{/* Money */}
      <Cus.Money />
    </C.HStack>
  )
}