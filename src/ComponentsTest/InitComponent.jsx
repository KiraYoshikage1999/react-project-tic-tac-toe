
import { Field } from './Field';
import { User } from './User';
import { LogicComponent } from './LogicComponent';
import React from 'react';

export function InitComponent({name,side}) {
    let gameOn = true;
    let user = new User(name,side);
    if(gameOn === false) {
        
    }
    else{
        return HandleTurn(user);
    }
    
}

function HandleTurn(user) {
    let[counter, setCounter] = React.useState(0);
    
    user.userTurn = true;
    counter++;
    if(counter >= 2) {
        LogicComponent(user , Field.arr);
    }
    return(<div>
        <h1>Tic-Tac-Toe</h1>
        <div className="WrapperField">
            <Field/>
            {/* <button className="BtnRestart" onClick={Field.ClearCells(Field.arr)}>Restart</button> */}
            
        </div>
    </div>)
}

// function HandleWin(side) {
//     if(side === "X") {
//         console.log("You Win!");
//     }
//     else if(side == "O") {
//         console.log("Player 2 win!");
//     }
// }

