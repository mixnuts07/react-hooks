import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { MyInfoContext } from "./index";
function App() {
  const [count, setCount] = useState(0);
  const myInfo = useContext(MyInfoContext);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Hello Hooks");
  }, [count]);
  return (
    <div className="App">
      <h1>UseState</h1>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
      {/* <p>{myInfo}</p> */}
    </div>
  );
}

export default App;
