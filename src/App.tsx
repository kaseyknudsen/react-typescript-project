import React from 'react';
import './App.css';

let name: string;
let age: number;

name = 'Kasey'
age = 44

function App() {
  return (
    <div className="App">
      <h1>{name} is {age} years old!</h1>
    </div>
  );
}

export default App;
