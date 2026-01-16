import { BoxOfField } from './BoxOfField';
import { Field } from './Field';
import { LogicComponent } from './LogicComponent';
import { InitComponent } from './InitComponent';
import React from 'react';

// export class Bot extends React.Component{
//     constructor(props){
//         super(props);
//         sideSymbol = "O";
//         botTurn = false;
//     }

//     Work({array, user}) {
//         let tempid = id
//         if(!botTurn) {return;} // Checking for turn of Bot
//         if(arrayOfField[1] == "" || arrayOfField[3] == "" || arrayOfField[7] == "" || arrayOfField[9] == "") {
//             if(arrayOfField[1] == "") {arrayOfField[1] = sideSymbol;}
//             else if(arrayOfField[3] == "") { arrayOfField[3] = sideSymbol;}
//             else if(arrayOfField[7] == "") { arrayOfField[7] = sideSymbol;}
//             else if(arrayOfField[9] == "") { arrayOfField[9] = sideSymbol;}
//             botTurn = false;
//         }
//         else if(arrayOfField[5] == "") {
//             arrayOfField[5] = sideSymbol;
//             botTurn = false;
//         }
//         else if(arrayOfField[2] == "" || arrayOfField[4] == "" || arrayOfField[6] == "" || arrayOfField[8] == "") {
//             if(arrayOfField[2] == "") {arrayOfField[2] = sideSymbol;}
//             else if(arrayOfField[4] == "") { arrayOfField[4] = sideSymbol;}
//             else if(arrayOfField[6] == "") { arrayOfField[6] = sideSymbol;}
//             else if(arrayOfField[8] == "") { arrayOfField[8] = sideSymbol;}
//         }

//         for(i = 0; i < arrayOfField.length; ++i) {
            
//         };
//         tempid -= 3
//     }
    
// }

function randomPick(...values) {
  return values[Math.floor(Math.random() * values.length)];
}

/* 
    [7][8][9]
    [4][5][6]
    [1][2][3]

    Hardcoding . Как добраться до 1 3 7 и 9 без сильных заморочек? Реально через хард кодинг?


*/