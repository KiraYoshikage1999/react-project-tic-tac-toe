
import '../App.css';
import '../index.css';
import { useState } from 'react';

export function BoxOfField({ i }) {
  const [counter, changeState] = useState(0);
  let currentSymbol = "";
  
  //Checking counter
  if(counter === 2) { currentSymbol = "O";}
  else if(counter === 1) {currentSymbol = "X";}
  else if(counter === 3) {changeState(0);}
  else if(counter === 0) {currentSymbol = "";}
  else {console.log("Some error happened check counter code");}
  //----------------

  // console.log("Boxcreated")

  return (
  <div className="containerOfBoxField" id={"blockId" + i} onClick={() => {
    RegisterClick();
    changeState(counter + 1);
    }}>
  <p className="textOfBox" >{currentSymbol}</p>
  </div>)
}

function RegisterClick() {
  console.log("Registered Click");
}