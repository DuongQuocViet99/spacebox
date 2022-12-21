interface ICategory {
  name: string,
  class: string,
  percent: number
}

const listCategory: ICategory[] = [
  { name: 'Vô cực', class: 'infinity', percent: 0.1 },
  { name: 'Tối thượng', class: 'supreme', percent: 1 },
  { name: 'Huyền thoại', class: 'legendary', percent: 3 },
  { name: 'God', class: 'god', percent: 12 },
  { name: 'Sử thi', class: 'epic', percent: 34 },
  { name: 'Hiếm', class: 'rare', percent: 43 },
  { name: 'Thường', class: 'normal', percent: 72 },
]

export default function CategoryRender({ render }: { render: ( i: ICategory, k: number ) => JSX.Element }) {
  return <>{ listCategory.map(( i, k ) => render( i, k )) }</>
}