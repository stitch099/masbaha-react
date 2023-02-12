import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Counter from "./Message";
import {
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const LOCAL_STORAGE_KEY = "counter";

function App() {
  const shareUrl = 'https://masbaha2.web.app/';

  const [ data, setData ] =  useState([
    { title: 'hamdellah', id: Math.floor(Math.random() * 1000000) },
    { title: 'subhanallah', id: Math.floor(Math.random() * 1000000) },
    { title: 'laa elah ela allah', id: Math.floor(Math.random() * 1000000) },
  ]);

  const newData = useRef();

  useEffect(() => {
    let storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      try{
        setData(JSON.parse(storedData));
      }catch(e){
        console.log(e);
      }
    }else{
      setData(data)
    }
  }, [])
  
  const toggleVisibility = (id) => {
    const dataNew = data.filter((item) => item.id !== id);
    setData(dataNew);
  };

  const handleAddCounter = () => {
    let title = newData.current.value;
    let newCounter = { title: title, id: Math.floor(Math.random() * 1000000) };
    if (title === "") { 
      alert("Please enter a tasbeeh");
    }else{
      let counter = [...data, newCounter];
      setData(counter);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counter));
    }
    newData.current.value = null;
  }



  return (
    <>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <br />
      <input ref={newData} type="text" />
      <button onClick={handleAddCounter}>add</button>
      {data.map((e, i) => {
        return <Counter 
        key={e.id} 
        title={e.title} 
        id={e.id} 
        index={i}
        toggleVisibility={toggleVisibility} 
        />
      })}
    </>
  );
}

export default App;
