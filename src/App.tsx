import React from "react";
import "./App.scss";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./components/model";
import ToDoList from "./components/ToDoList";
import SingleToDo from "./components/SingleToDo";
//React.FC means function component type
//React.ReactNode supports all of the types
const App: React.FC = () => {

  //state for 1 to do inside input field
  const [todo, setToDo] = useState<string>("")
  //this is how you create a type of an array or interface
  //state for all of our toDos
  const [toDoList, setToDoList] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      // Date.now() returns milliseconds, so it can be used as a unique id
      //add to the already existing toDoList, so we use the spread operator
    setToDoList([...toDoList, {id: Date.now(), todo, isDone: false}])
    setToDo("")
  }
  };

  console.log(toDoList)
  return (
    <div className="App">
      <span className="heading">Practice List</span>
      <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd}/>
      {/* {toDoList.map((element) => (<li>{element.todo}</li>))} */}
      <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
      {/* <ToDoList /> */}
      
      
    </div>
  );
}

export default App;
