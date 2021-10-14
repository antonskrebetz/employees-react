
import AddForm from '../add-form/add-form';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmplList from '../empl-list/empl-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

const App = () => {

  const data = [
    {name: 'Roman Helga', salary: 800, increase: false, like: false, id: 1},
    {name: 'Anton Skrebetz', salary: 1500, increase: true, like: false, id: 2},
    {name: 'Alex Seruda', salary: 2300, increase: false, like: false, id: 3},
    {name: 'Rolex Sahur', salary: 4300, increase: false, like: false, id: 4}
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmplList data={data}/>
      <AddForm />
    </div>
  )
}

export default App;