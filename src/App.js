import './App.css';
import styled from 'styled-components';
import React from 'react';
import Counter from './Counter';
import TodoItem from './TodoItem';
import { useState,useRef } from 'react';



function App() {
  
  const [todos,setTodos] = useState([
    {id:1, content:'abc'}
  ])

  const [value,setValue] = useState('')
  const id = useRef (2)
  
  const handelButtonClick=()=>{
    setTodos ([{
      id:id.current,
      content:value
    },...todos])
    setValue('')
    id.current++
  }

  const handleInputChange = (e) =>{
    setValue(e.target.value)
  }
  return (
    
    <div className="App">
        <div> <Counter/> </div>
        <input type="text" placeholder='todo' value={value} onChange={handleInputChange} />
        <button onClick={handelButtonClick}>Add todo</button>
        {
        todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
        }
       
    </div>
  );
}

export default App;
