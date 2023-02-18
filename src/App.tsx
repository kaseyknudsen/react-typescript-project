import React from "react";
import "./App.scss";
import InputField from "./components/InputField";


//React.FC means function component type
//React.ReactNode supports all of the types
const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Practice List</span>
      <InputField />
      
    </div>
  );
}

export default App;
