import EmplListItem from '../empl-list-item/empl-list-item';
import './empl-list.css';

const EmplList = ({data}) => {

  const elements = data.map(el => {
    return (
      <EmplListItem key={el.id} name={el.name} salary={el.salary} increase={el.increase}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmplList;