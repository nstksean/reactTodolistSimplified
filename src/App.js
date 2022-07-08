import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import React, { Fragment } from 'react';
import Counter from './Counter';
import TodoItem from './TodoItem';
import { useState, useRef } from 'react';
import { useEffect } from 'react';


// [{
//   id: id.current,
//   content: value,
//   isDone: false,
// }, ...todos]

// [{
//   id: id.current,
//   content: value,
//   isDone: false,
// },
// {
//   id: id.current,
//   content: value,
//   isDone: false,
// },]


// const checkd = (text) => {
//   switch (text) {
//     case 'completed':
//       return true
//     case 'in pro':
//       return true


//     default:
//       break;
//   }
// }

function App() {

  const [todos, setTodos] = useState([
    { id: 1, content: 'abc', isDone: true },
    { id: 2, content: "not", isDone: false },
  ])

  const [value, setValue] = useState('')
  // const idRef = useRef(3)

  const handleButtonClick = (event) => {
    console.log('event', event)
    event.preventDefault()

    // const newValue = [{
    //   id: id.current,
    //   content: value,
    //   isDone: false,
    // }, ...todos]
    // setTodos(newValue)
    // id.current++


    setTodos(prev => {
      console.log('sd', prev.length)
      return [{
        id: prev.length + 1,
        content: value,
        isDone: false,
      }, ...prev]
    })


    setValue('')
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  const handleToggleIsDone = id => {

    // replaces 1 element at index 4
    // setTodos(prevValue => {
    //   prevValue.splice(0, 1, {
    //     "id": 5,
    //     "content": "",
    //     "isDone": false
    //   });
    //   console.log('prevValue', prevValue)
    //   console.log(' [...prevValue]', [...prevValue])
    //   return [...prevValue]
    // })


    const changeValue = todos.map(todo => {
      if (todo.id !== id) return todo

      return {
        ...todo,
        isDone: !todo.isDone
      }
    })
    setTodos(changeValue)
  }

  return (
    <div className="App">
      <div> <Counter /> </div>
      <div onClick={() => console.log(todos)}>d</div>
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


      {/* <div className={ isShow ? 'show' : ''}></div> */}
      {
        todos.map(todo =>
          //todo
          <React.Fragment key={todo.id} >
            {JSON.stringify(todo)}
          </React.Fragment>
        )
      }
      {todos.length}

      {
        todos.map((todo, idx) =>
          <TodoItem key={todo.id} todo={todo} idx={idx} setTodos={setTodos}
            handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone} />
        )

      }

    </div >
  );
}

export default App;
