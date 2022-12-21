import * as TB from'@tabler/icons'

interface IRoutes { 
  icon: JSX.Element,
  url: string
}

const listApps: IRoutes[] = [
  { icon: <TB.IconHome size='20px' />, url: '/' },
  { icon: <TB.IconShoppingCart size='20px' />, url: '/shop' },
  { icon: <TB.IconMoneybag size='20px' />, url: '/reward' },
  { icon: <TB.IconChartBar size='20px' />, url: '/ranking' },
  { icon: <TB.IconBookmark size='20px' />, url: '/clans' },
  { icon: <TB.IconDiamonds size='20px' />, url: '/premium' },
  { icon: <TB.IconSettings size='20px' />, url: '/settings' }
]

export default function DrawerRoutesRender({ render }: { render: ( i: IRoutes, k: number ) => JSX.Element }) {
  return <>{ listApps.map(( i, k ) => render( i, k )) }</>
}