import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import AddTodoField from './components/AddTodoField';

function App() {
  return (
    <div className="app">
      <h1>Todo List App</h1>
      <AddTodoField/>
      <div>
        <TodoList/>
      </div>
      <TodoFilter/>
    </div>
  );
}

export default App;
