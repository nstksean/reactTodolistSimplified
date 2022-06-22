import React from "react";

function Counter() {

    const [counter, setCounter] = React.useState(0)

   function handleButtonClick() {
        setCounter(counter + 1);
    }
    const handledeButtonClick=()=>{
        setCounter(counter-1)
    }

  return ( 
   <div className='cter'>
    counter:{counter}
    <button onClick={handleButtonClick}>increment</button>
    <button onClick={handledeButtonClick}>decrement</button>
   </div>);
   }

export default Counter;