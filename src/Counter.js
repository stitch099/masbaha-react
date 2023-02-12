import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let saved = localStorage.getItem(props.id);
    if (saved) {
      try {
        setCount(JSON.parse(saved));
      } catch (e) {
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
      <div className="col">
        <div className="card card1 border border-2 border-secondary">
          <div className="cancel border border-secondary" onClick={() => props.toggleVisibility(props.id)}>
            <FontAwesomeIcon icon={faX} id="cancel-cancel" />
          </div>
          <div className="card-header header">
            <h2>{props.title}</h2>
          </div>
          <div className="counter" onClick={increment}>
            <div className="count">{count}</div>
          </div>
          <div className="home-reset">
            <button onClick={reset} className="reset"><FontAwesomeIcon icon={faRotateLeft} id="cancel-reset" /></button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
