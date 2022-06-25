import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import Counter from './Counter';
import TodoItem from './TodoItem';
import { useState, useRef } from 'react';



function App() {

  const [todos, setTodos] = useState([
    { id: 1, content: 'abc', isDone: true },
    { id: 2, content: "not", isDone: false },
  ])

  const [value, setValue] = useState('')
  const id = useRef(3)

  const handleButtonClick = (event) => {
    console.log('event', event)
    event.preventDefault()
    setTodos([{
      id: id.current,
      content: value,
      isDone: false,
    }, ...todos])
    setValue('')
    id.current++
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }

  return (
    <div className="App">
      <div> <Counter /> </div>

      <form onSubmit={handleButtonClick}>
        <input
          type="text"
          name='data'
          placeholder='todo'
          value={value}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Add todo</button>
      </form>

      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo}
          handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone} />)
      }

    </div>
  );
}

export default App;
