interface IApps { 
  icon: JSX.Element,
  url: string
}
interface ICategory {
  name: string,
  class: string,
  percent: number
}

type Common = IApps | ICategory

export default function Map({ list, render }: { list: Common[], render: ( i: Common, k: number ) => JSX.Element }) {
  return <>{ list.map(( i: Common, k: number ) => render( i, k )) }</>
}