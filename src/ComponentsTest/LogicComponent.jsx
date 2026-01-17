// Libraries
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// Components
import { InitComponent } from './InitComponent';


export function LogicComponent({ arrayOfField = [], onWin }) {
  useEffect(() => {
    if (!Array.isArray(arrayOfField) || arrayOfField.length < 9) return;

    const LINES = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of LINES) {
      if (
        arrayOfField[a] &&
        arrayOfField[a] === arrayOfField[b] &&
        arrayOfField[a] === arrayOfField[c]
      ) {
        
        // InitComponent.gameOn = false;
        const winner = checkWinCondition(arrayOfField[a]);
        if (typeof onWin === 'function') onWin(winner);
        return;
      }
    }
  }, [arrayOfField]);

  return null;
}

function checkWinCondition(Symbol) { 
  if(Symbol === "X") {
    return "Player 1";
  }
  else if(Symbol == "O") {
    return "Player 2";
  }
  else { }
}

/* [7][8][9]
   [4][5][6]
   [1][2][3]

    
   Линия 1 - 4 - 7 можно высчитать по формуле ниже:
   n = 1
   n1 = n + 3 =>  4 = 1 + 3 
   n2 = n + 6 =>  7 = 1 + 6
   if(n == n1 || n1 == n2 ) { console.log("You win")};

   Следовательно с помощью этой закономерности можно высчитать вертикальные линии, горизонтальные проще из-за формы массива =>
   Просто пройтись по двумерному массиву и если один из массивов в массиве обладает одинаковыми символами, ну вы выиграли.

   Реализовать наискось по сложнее, можно подумать о 
   n + 4 ( 1 + 4 = 5 + 4 = 9 => 1 - 5 - 9 => вы выиграли), правда надо учитывать, ещё вторую диагональ
   n + 2 = n1 + 2 = n2 => 3 + 2 = 5 + 2 = 7 => 3 - 5 - 7 => win
   */
