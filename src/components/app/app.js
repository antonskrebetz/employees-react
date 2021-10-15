
import { Component } from 'react';
import AddForm from '../add-form/add-form';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmplList from '../empl-list/empl-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

export default class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Roman Helga', salary: 800, increase: false, like: true, id: 1},
        {name: 'Anton Skrebetz', salary: 1500, increase: false, like: false, id: 2},
        {name: 'Alex Seruda', salary: 2300, increase: false, like: false, id: 3},
        {name: 'Rolex Sahur', salary: 4300, increase: false, like: false, id: 4}
      ],
      term: '',
      filter: ''
    }
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(el => el.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name, 
      salary,
      increase: false,
      like: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr  
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const oldItem = data[index];
      const newItem = {...oldItem, [prop]: !oldItem[prop]}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }

  search = (items, term) => {
    if (term.length === 0) return items;

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term: term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'like':
        return items.filter(item => item.like)
      case 'more1000':
        return items.filter(item => item.salary > 1000)
      default: 
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const employees = data.length;
    const increased = data.filter(elem => elem.increase).length;
    const visibleData = this.filterPost(this.search(data, term), filter);


    return (
      <div className="app">
        <AppInfo 
          employees={employees}
          increased={increased}
        />
  
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter 
            filter={filter} 
            onFilterSelect={this.onFilterSelect}
          />
        </div>
  
        <EmplList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <AddForm
          onAddItem={this.addItem}
        />
      </div>
    )
  }
}