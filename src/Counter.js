import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let saved = localStorage.getItem(props.id);
    if (saved) {
      try{
        setCount(JSON.parse(saved));
      }catch(e){
        console.log(e);
      }
    }
 }, [])

  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(props.id, JSON.stringify(newCount));
  }

    const reset = () => {
    let newCount = 0;
    setCount(newCount);
    localStorage.setItem(props.id, JSON.stringify(newCount));
  }
  return (
    <>
    <hr />
    <h2>{props.title}</h2>
    <br />
    <span>clicks: {count}</span>
    <br />
   <button onClick={increment}>increment</button> 
   <br />
   <button onClick={reset}>reset</button>
   <br />
   <button onClick={() => props.toggleVisibility(props.id)}>cancel</button>
    </>
  );
};
export default Counter;
