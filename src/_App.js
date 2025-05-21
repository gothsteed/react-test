import {useState, useEffect} from "react";
import Button from "./Button";
import Button2 from "./Button2";
import styled from "./App.module.css";
import { func } from "prop-types";

function Hello() {

  function byeFunction() {
    console.log("bye");
  }
  function hiFucnction() {
    console.log("hi");
    return byeFunction;
  }

  //no dependency array
  useEffect(hiFucnction, [])
  return <h1>Hello</h1>;
}

function App() {
  const [isShow, setIsShow] = useState(false);
  const onClick = () => setIsShow((prev) => !prev);
  return (
    <div className="App">
      {isShow? <Hello /> : null}
        <button onClick={onClick}>{isShow? "Hide": "Show"}</button>
    </div>
  );
}

export default App;
