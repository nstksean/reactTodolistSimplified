import './App.css';
import styled from 'styled-components';
import React from 'react';
import Counter from './Counter';
import TodoItem from './TodoItem';

function App() {
       
  return (
    
    <div className="App">
        <div> <Counter/> </div>
        <TodoItem content={123}/>
        <TodoItem content={456}/>
    </div>
  );
}

export default App;
