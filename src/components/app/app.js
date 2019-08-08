import React, { Component } from 'react';

import AppHeader from '../app/../app-header';
import SearchPanel from '../app/../search-panel';
import TodoList from '../app/../todo-list';
import ItemStatusFilter from '../app/../item-status-filter';
import './app.css';
import AddItem from "../add-item";



export default class App extends Component {

  maxId = 100;

  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      }
    })
  };

  addItem = (text) => {


    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({todoData}) => {
      const newArr = [
          ...todoData, newItem
      ];
      return {
        todoData: newArr
      }
    });

  };

  render() {
    return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>

          <TodoList todos={this.state.todoData} onDeleted = {this.deleteItem} />
          <AddItem onAddItem = {this.addItem}/>
        </div>
    );
  }
}



