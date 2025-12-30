import { BoxOfField } from './BoxOfField';
import { Field } from './Field';
import { User } from './User';
import { LogicComponent } from './LogicComponent';
import React from 'react';

export function InitComponent({name,side}) {
    
    let user = new User(name,side);
    return HandleTurn(user);

}

function HandleTurn(user) {
    let[counter, setCounter] = React.useState(0);
    
    user.userTurn = true;
    counter++;
    if(counter >= 2) {
        LogicComponent(user , Field.arr);
    }
    return(<Field/>);
}

