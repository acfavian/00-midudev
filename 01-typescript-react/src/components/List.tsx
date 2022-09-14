import { Sub } from '../types'

interface Props {
  // children: JSX.Element
  // children: React.Node
  // children: (name: string) => React.Node

  // subs: Array<{
  //   nick: string
  //   avatar: string
  //   subMonths: number
  //   description?: string
  //   }>
  subs: Array<Sub>
}
// const List: React.FunctionComponent = ({subs}: Props) => {
// const List: React.FC<Props> = ({subs}) => {
const List = ({subs}: Props) => {
  
  const renderList = (): JSX.Element[] => {
    return  subs.map(sub => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        )
      })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  ) 
}

export default List