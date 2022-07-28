import './App.css';
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

function TabNav(activeTab) {
  const [activeTab, setActiveTab] = useState("tab1")

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3")
  }
  const [todos, setTodos] = useState([
    { id: 1, content: 'abc', isDone: true },
    { id: 2, content: "not", isDone: false },
  ])


  return (
    <div className="navContainer">
      <div className="filter">
        <div className={activeTab === "tab1" ? "filterC" : "filter"}
          onClick={handleTab1}>My Tasks</div>
        <div className={activeTab === "tab2" ? "filterC" : "filter"}
          onClick={handleTab2}>In Progress</div>
        <div className={activeTab === "tab3" ? "filterC" : "filter"}
          onClick={handleTab3}>
          Completed</div>
      </div>
      <div className="outlet">
        {activeTab === "tab1" ? todos.map((todo, idx) => <TodoItem key={todo.id} todo={todo} idx={idx} setTodos={setTodos} />) : []}
        {activeTab === "tab2" ? <SecondTab /> : []}
        {activeTab === "tab3" ? [<FirstTab />, <SecondTab />] : []}

        {/* content will be shown here */}
      </div>
    </div>
  )
}
const FirstTab = () => {
  return (
    <div className="FirstTab">
      <p>First Tab!! Hurray!!</p>
      {/* First tab content will go here */}
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <p>Second Tab!! Hurray!!</p>
      {/* Second  tab content will go here */}
    </div>
  );
};

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
  // const Tabs = () => {
  //   const [activeTab, setActiveTab] = useState("tab1");

  //   return (
  //     <div className="Tabs">
  //       <ul className="nav">
  //         <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
  //         <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
  //       </ul>

  //       <div className="outlet">
  //         <TabContent id="tab1" activeTab={activeTab}>
  //           <FirstTab />
  //         </TabContent>
  //         <TabContent id="tab2" activeTab={activeTab}>
  //           <SecondTab />
  //         </TabContent>
  //       </div>
  //     </div>
  //   );
  // };


  // const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

  //   const handleClick = () => {
  //     setActiveTab(id);
  //   };

  //   return (
  //     <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
  //       {title}
  //     </li>
  //   );
  // };
  // const TabContent = ({ id, activeTab, children }) => {
  //   return (
  //     activeTab === id ? <div className="TabContent">
  //       {children}
  //     </div>
  //       : null
  //   );
  // };

  return (
    <div className="App">

      <div> <Counter /> </div>
      <div onClick={() => console.log(todos)}>d</div>
      <div>
        <TabNav />
      </div>
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
      console.log("todos", {JSON.stringify(todos)})
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
