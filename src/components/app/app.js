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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Drink water'),
      this.createTodoItem('Drink milk'),
    ],
    term: '',
    filter: 'all'
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

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
    const newItem =this.createTodoItem(text);

    this.setState(({todoData}) => {
      const newArr = [
          ...todoData, newItem
      ];
      return {
        todoData: newArr
      }
    });

  };

  toggleProprty = (arr, id, propName ) => {

    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProprty(todoData, id, 'important'),
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProprty(todoData, id, 'done'),
      }
    })
  };

  search(items, term) {
    if (term === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })

  }

  onSearchChange= (term)=> {
    this.setState({ term })
  };
  filter (items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'done':
        return items.filter((item) => item.done);
      case 'active':
        return items.filter((item) => !item.done)
      default:
        return items
    }
  }

  onFilterChange= (filter)=> {
    this.setState({ filter })
  };

  render() {
    const {todoData, term, filter} = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
        <div className="todo-app">
          <AppHeader toDo={todoCount} done={doneCount} />
          <div className="top-panel d-flex">
            <SearchPanel onSearchChange = {this.onSearchChange}/>
            <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
          </div>
          <TodoList todos={visibleItems} onToggleImportant={this.onToggleImportant} onToggleDone = {this.onToggleDone} onDeleted = {this.deleteItem} />
          <AddItem onAddItem = {this.addItem}/>
        </div>
    );
  }
}
