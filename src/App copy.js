import {useState, useEffect} from "react";
import Button from "./Button";
import Button2 from "./Button2";
import styled from "./App.module.css";
import { func } from "prop-types";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {setKeyword(event.target.value);};
  //console.log("search for ", keyword);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }

  console.log("I run all the time");

  // useEffect
  // 첫번째 인자ㅣ 부수효과를 실행할 함수. 랜더링 이후에 실행
  // 두번째 인자: 의존성 배열. 배열 안에 있는 값이 변경될 대만 부수효과 함수를 실행
  //             생략시 랜더링 될때마다 실행
  //             빈 배열일 경우, 컴포넌트가 처음 랜더링 될 때만 실행
  useEffect(() => {
    console.log("call the API");
  }, []);

  useEffect(() => {
    if(keyword.length > 0) {
      console.log("search for ", keyword);
    }

    return () => {console.log("cleaning up keyword search effect");}
  }, [keyword])

  useEffect(() => {
    console.log("counter is updated");

    return () => {console.log("cleaning up counter effect");}
  }
  , [counter]);

  return (
    <div className="App">
        <h1 className={styled.btn}>Welcome to React</h1>
        <input value={keyword}  onChange={onChange} type="text" placeholder="search here" />
        <div>counter: {counter}</div>
        <Button text="Click Me" onClick={handleClick}/>
        <Button2 text="Submit" />
        <button onClick={handleClick}>count up</button>
    </div>
  );
}

export default App;
