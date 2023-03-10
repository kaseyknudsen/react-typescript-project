import React from "react";
import "./App.scss";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./components/model";
import ToDoList from "./components/ToDoList";
import SingleToDo from "./components/SingleToDo";
import InputField2 from "./components/InputField2";
import { Box, Container, Grid } from "@mui/material";
//React.FC means function component type
//React.ReactNode supports all of the types
const App: React.FC = () => {

  //state for 1 to do inside input field
  const [todo, setToDo] = useState<string>("")
  const [todo2, setToDo2] = useState<string>("")
  //this is how you create a type of an array or interface
  //state for all of our toDos
  const [toDoList, setToDoList] = useState<Todo[]>([])
  const [toDoList2, setToDoList2] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      // Date.now() returns milliseconds, so it can be used as a unique id
      //add to the already existing toDoList, so we use the spread operator
    setToDoList([...toDoList, {id: Date.now(), todo, isDone: false}])
    setToDo("")
  }
  };

  const handleAdd2 = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo2) {
      setToDoList2([...toDoList2, {id: Date.now(), todo, isDone: false}])
      setToDo2("")
    }
  }

  console.log(toDoList)
  return (
    <Container className="App" maxWidth="xl">
      <Grid>
        <Grid item xs={12}>
          <span className="heading">Practice List</span>
        </Grid>
        <Grid item>
          <InputField todo={todo} setToDo={setToDo} handleAdd={handleAdd}/>
        </Grid>
      {/* {toDoList.map((element) => (<li>{element.todo}</li>))} */}
      {/* <ToDoList /> */}
        <Grid item>
          <InputField2 todo={todo2} setToDo={setToDo2} handleAdd2={handleAdd2} />
        </Grid>
        <Grid item>
          <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
