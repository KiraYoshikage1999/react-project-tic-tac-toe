
import { useReducer, useState } from 'react';
import {XOContext} from '../ContextFolder/Context';
import '../App.css';
import '../index.css';
// Components
import { BoxOfField } from './BoxOfField';
import { LogicComponent } from './LogicComponent';
import { setCell } from '../Reducer/actions';
import { reducer } from '../Reducer/reducer';

export function Field() {
  const [currentSymbol, setCurrentSymbol] = useState('X');
  //const [cells, useCells] = useState();
  //
  const [cells, dispatch] = useReducer(reducer, Array(9).fill(''));

  //Array(9).fill('')

  //Function to always create new array with new data, not to change old one.
  function handleClick(i) {
    
    // if (cells[i]) return;
    // setCells(prev => {
    //   const next = prev.slice();
    //   next[i] = currentSymbol;
    //   return next;
    // });
    // setCurrentSymbol(s => s === 'X' ? 'O' : 'X');
    if (cells[i]) return;
    dispatch(setCell(i, currentSymbol));
    setCurrentSymbol(s => s === 'X' ? 'O' : 'X');
  }

  // let arr = [];
  // for (let i = 0; i < 9; i++) {
  //   arr.push(
  //     <BoxOfField key={i} id={i} value={cells[i]} onClick={() => handleClick(i)} />
  //   );
  //   console.log("Pushing in arr done");
  // }
  const arr = Array.from({length:9}, (_,i)=>(
    <BoxOfField key={i} id={i} value={cells[i]} onClick={()=>handleClick(i)} />
  ));
  return <div className="Field">{arr}<LogicComponent arrayOfField={cells} /></div>;
  // return (
  //   <div className="Field">
  //     {cells}
  //     <LogicComponent arrayOfField={cells} />
  //   </div>
  // );
}

export function ClearCells({arr}) {
  for(let i = 0; i < 9; i++) {
    arr[i] = <BoxOfField key={i} id={i} value={""} />
  }
}
