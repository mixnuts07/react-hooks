import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from "react";
import "./App.css";
import { MyInfoContext } from "./index";
import SomeChild from "./SomeChild";
import useLocalStorage from "./useLocalStorage";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Hello Hooks");
  }, [count]);
  const myInfo = useContext(MyInfoContext);
  const ref = useRef(null);
  const handleRef = () => {
    console.log(ref);
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);
  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);
  // const square = () => {
  //   let i = 0;
  //   while (i < 200) {
  //     i++;
  //   }
  //   return count02 * count01;
  // };
  const [counter, setCounter] = useState(0);
  // const showCount = () => {
  //   alert("UseCallback..callback関数のメモ化")
  // }
  const showCount = useCallback((): void => {
    alert("UseCallback..callback関数のメモ化");
  }, [counter]);

  const [age, setAge] = useLocalStorage("age", 24);
  return (
    <div className="App">
      <hr />
      <h1>UseState</h1>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
      <hr />
      <h1>UseContext</h1>
      <p>Name : {myInfo.name}</p>
      <p>Age : {myInfo.age}</p>
      <hr />
      <h1>UseRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>
      <hr />
      <h1>useReducer</h1>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: "1" })}>
        -
      </button>
      <hr />
      <h1>UseMemo</h1>
      <div>Count1 : {count01}</div>
      <div>Count2 : {count02}</div>
      <div>Result : {square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>
      <hr />
      <h1>UseCallback</h1>
      {/* <SomeChild showCount={showCount} /> */}
      <hr />
      <h1>Custom Hooks</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>Set Age</button>
    </div>
  );
}

export default App;
