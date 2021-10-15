import EmplListItem from '../empl-list-item/empl-list-item';
import './empl-list.css';

const EmplList = ({data, onDelete, onToggleProp}) => {

  const elements = data.map(el => {
    return (
      <EmplListItem 
        key={el.id} 
        name={el.name} 
        salary={el.salary} 
        increase={el.increase}
        like={el.like}
        onDelete={() => onDelete(el.id)}
        onToggleProp={(e) => onToggleProp(el.id, e.currentTarget.getAttribute('data-toggle'))}
      />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmplList;