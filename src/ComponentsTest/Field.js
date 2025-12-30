
import { useState } from 'react';
import '../App.css';
import '../index.css';
// Components
import { BoxOfField } from './BoxOfField';
import { LogicComponent } from './LogicComponent';

export function Field() {
  const [currentSymbol, setCurrentSymbol] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''));

  function handleClick(i) {
    if (cells[i]) return; // already filled
    setCells(prev => {
      const next = [...prev];
      next[i] = currentSymbol;
      return next;
    });
    setCurrentSymbol(s => (s === 'X' ? 'O' : 'X'));
  }

  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(
      <BoxOfField key={i} id={i} value={cells[i]} onClick={() => handleClick(i)} />
    );
  }

  return (
    <div className="Field">
      {arr}
      <LogicComponent arrayOfField={cells} />
    </div>
  );
}
