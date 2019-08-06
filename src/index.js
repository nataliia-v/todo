import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';



const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id:1 },
    { label: 'Eat Pizza', important: false, id:2 },
    { label: 'Skiing', important: true, id:3 }
  ];


  return(
      <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList todos={todoData}/>
      </div>
  )
};


ReactDOM.render(<App/>, document.getElementById('root'));