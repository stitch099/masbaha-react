import React, { useState, useEffect, useRef } from "react";
import Counter from "./Counter";
import {
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";


const LOCAL_STORAGE_KEY = "counter";

function App() {
  const shareUrl = 'https://masbaha2.web.app/';

  const [data, setData] = useState([
    { title: 'الحمدلله', id: Math.floor(Math.random() * 1000000) },
    { title: 'سبحان الله', id: Math.floor(Math.random() * 1000000) },
    { title: 'الله وأكبر', id: Math.floor(Math.random() * 1000000) },
  ]);

  const newData = useRef();

  useEffect(() => {
    let storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (e) {
        console.log(e);
      }
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
    } else {
      let counter = [...data, newCounter];
      setData(counter);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counter));
    }
    newData.current.value = null;
  }



  return (

    <div className="contain">
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <div className="input-group">
        <input ref={newData} type="text" className="form-control" placeholder="صيغة التسبيح" aria-label=" صيغة التسبيح " />
        <div className="input-group-append" >
          <button onClick={handleAddCounter} className="btn btn-outline-secondary">إضافة</button>
        </div>
      </div>
      <div className="container no-text-select">
        <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xlg-4 ">
          {data.map((e, i) => {
            return <Counter
              key={e.id}
              title={e.title}
              id={e.id}
              index={i}
              toggleVisibility={toggleVisibility}
            />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
