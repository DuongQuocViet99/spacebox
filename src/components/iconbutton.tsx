import * as C from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const IconButtonRoute = ({ to, icon }: { to: string, icon: JSX.Element }) =>
  <C.IconButton
    as={ Link }
    to={ to }
    size='sm'
    bg='none'
    color='white'
    icon={ icon }
    aria-label='app'
    _active={{}}
    _hover={{ bg: 'adobe.brown.1' }}
  />