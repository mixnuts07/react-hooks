import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
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
    </div>
  );
}

export default App;
