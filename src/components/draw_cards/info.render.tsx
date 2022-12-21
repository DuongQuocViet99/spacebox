interface IInfo {
  name: string,
  value: string | JSX.Element
}

const listInfo: IInfo[] = [
  { name: 'Tên:', value: 'Đảo ngược thời gian' },
  { name: 'Cấp độ:', value: 'Vô cực' },
  { name: 'Số lần sử dụng:', value: '1' },
  { name: 'Mô tả:', value: 'Quay ngược lại thời gian, những tính năng có được trước đó sẽ không bị mất' },
  { name: 'Mẹo:', value: 'Sử dụng khi hứng chịu thiệt hại lớn, quay ngược thời gian để lấy lại những thứ đã mất' }
]

export default function InfoCardRender({ render }: { render: ( i: IInfo, k: number ) => JSX.Element }) {
  return <>{ listInfo.map(( i, k ) => render( i, k )) }</>
}