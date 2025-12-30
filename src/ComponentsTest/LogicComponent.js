import { BoxOfField } from './BoxOfField';
import { Field } from './Field';
import { User } from './User';
import { Component } from 'react';
import React from 'react';
import PropTypes from "prop-types";

export function LogicComponent({user , arrayOfField}) {
    
    CheckLines(arrayOfField)
}

function CheckLines({arrayOfField}) {
    // let counter = 0;
    const arrayOfLines = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    for(let i = 0; i < arrayOfField; ++i) {
        for(let j = 0; j < arrayOfLines; ++j) {
            for(let k = 0; k < arrayOfLines[j]; ++k) {
                if(arrayOfField[i] === arrayOfField[++i] && arrayOfField[++i] === arrayOfField[i+2]  ) {
                    console.log("Done")
                }
            }
        }
    }
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

       // for(i = 0; i < arrayOfField.length; ++i) {
    //     if(arrayOfField[i] == user.sideSymbol && arrayOfField[i] == arrayOfField[i + 3] && arrayOfField[i] == arrayOfField[i + 6] ) {
    //         console.log("You Win");
    //     }
    //     else if(arrayOfField[i] == user.sideSymbol && arrayOfField[i] == arrayOfField[i + 1] && arrayOfField[i] == arrayOfField[i + 2]) {
    //         console.log("You Win");
    //     }
    //     else if(arrayOfField[i] == user.sideSymbol && arrayOfField[i] == arrayOfField[i + 4] && arrayOfField[i] == arrayOfField[i + 8] ) {
    //         console.log("You Win");
    //     }
    //     else if(arrayOfField[i] == user.sideSymbol && arrayOfField[i] == arrayOfField[i + 2] && arrayOfField[i] == arrayOfField[i + 4] ) {
    //         console.log("You Win");
    //     }
    // }

   */
// LogicComponent.PropTypes = {
//     user: PropTypes.object.isRequired,
//     id: PropTypes.BoxOfField.id.isRequired,
// };