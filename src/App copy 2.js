import {useState, useEffect} from "react";


function App() {
  const [todo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, todo]);
    setTodo("");
  }
  console.log(toDos);

  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={todo}
          type="text" 
          placeholder="Write your do to...." 
        />
        <button>Add To Do</button>
      </form>
      <br/>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  )
}

export default App;
