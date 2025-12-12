import './App.css';
import './index.css';
//Components
import {BoxOfField} from './Components/BoxOfField';
import {Field} from './Components/Field';
//Other functions of React
import { useState } from "react";

function App() {
  return (
    <div className="App">
   
    {/* <h1>Test h1</h1>
    <MyButton />    */}
      <Field />

      {/*       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function MyButton() {
  return ( 
    <button>
      test Button.
    </button>
  )
}




export default App;
