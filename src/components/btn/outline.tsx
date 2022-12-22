import * as C from '@chakra-ui/react'

interface IProps {
  children: string,
  as?: any,
  to?: string,
  size?: string
}

export default function BtnOutline({ children, as, to, size }: IProps ) {
  return <C.Button
    as={ as }
    to={ to }
    size={ size }
    bg='none'
    border='1px'
    rounded='sm'
    fontSize='sm'
    fontWeight='400'
    color='adobe.gray.2'
    fontFamily='Quicksand'
    borderColor='adobe.gray.4'
    _active={{}} _hover={{ borderColor: 'adobe.gray.3' }}
  > { children } </C.Button>
}