import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//Components
import {BoxOfField, BoxOfFieldOnClick} from './ComponentsTest/BoxOfField';
import {Field} from './ComponentsTest/Field';
//Other functions of React
import { useState } from "react";
import SideChoice from './Sites/SideChoice/SideChoice';
import ProtectedRoute from './Sites/ProtectedRoute';
import { InitComponent } from './ComponentsTest/InitComponent';


function App() {
  return (
    <div className="App">
   
      {/* <h1>Test h1</h1>
      <MyButton />    */}
      {/* <BoxOfFieldOnClick id={1} currentSymbol='x'/> */}
      {/* <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/side-choice">Side Choice</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProtectedRoute></ProtectedRoute>} />
          <Route path="/side-choice" element={<SideChoice/>} />
        </Routes>
      </Router> */}

      <InitComponent name="Player 1" side="X"/>
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
