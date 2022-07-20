import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

type Information = {
  name: string;
  age: number;
};

const myInfo: Information = {
  name: "K659903",
  age: 24,
};

export const MyInfoContext = createContext<Information>(myInfo);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MyInfoContext.Provider value={myInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyInfoContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
