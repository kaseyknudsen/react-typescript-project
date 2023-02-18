import React from "react";
import "./App.scss";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./components/model";
//React.FC means function component type
//React.ReactNode supports all of the types
const App: React.FC = () => {

  const [todo, setToDo] = useState<string>("")
  //this is how you create a type of an array or interface
  const [toDos, setToDos] = useState<Todo[]>([])
  console.log(todo)
  return (
    <div className="App">
      <span className="heading">Practice List</span>
      <InputField todo={todo} setToDo={setToDo}/>
      
    </div>
  );
}

export default App;
