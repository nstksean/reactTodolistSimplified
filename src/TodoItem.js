import React from "react";
import styled from "styled-components";
import './App.css'



const TodoItemWrapper= styled.div`
display:flex;
align-items:center;
justify-content:space-around;
padding:8px 16px;
border: 2px solid green;
& + & {
    margin-top:12px;
}
`
const TodoContent = styled.div`
color:black;
font-size:16px;

`
const TodoButtonWrapper=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:8px 16px;
border: 1px solid black;`

const Button=styled.button`
`
const RedButton=styled.button`
color:red;
`
function TodoItem({className,todo}) {
  return ( 
<div>
<TodoItemWrapper className={className} data-todo-id={todo.id}>
    <TodoContent>{todo.content}</TodoContent>
    <TodoButtonWrapper>
        <Button>已完成</Button>
        <RedButton>刪除</RedButton>
    </TodoButtonWrapper>
</TodoItemWrapper>
</div>);
   }

export default TodoItem;