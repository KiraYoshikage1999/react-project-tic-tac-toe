// Libraries
import React, { useState, useEffect, useContext } from 'react';

//Components
import { Field } from './Field';
import { User } from './User';
import { LogicComponent } from './LogicComponent';
import { XOContext } from '../ContextFolder/Context';


export function InitComponent({name,side}) {
    const [winner, setWinner] = useState(null); // Track the winner
    const [gameOn, setGameOn] = useState(true); // Track if the game is ongoing
    const [resetKey, setResetKey] = useState(0);

    const user = new User(name, side);
    user.userTurn = true;

    // useEffect(() => {
    //     //Run game logic (adjust invocation as needed)
    //     const result = LogicComponent(user);
    //     if (result) {
    //         setWinner(result);
    //         setGameOn(false);
    //     }
    // }, [user]);

    const handleReset = () => {
        setWinner(null);
        setGameOn(true);
        // bump the key so Field remounts and clears its internal reducer state
        setResetKey(k => k + 1);
    };

    return (
        <div>
            <h1 className='TitleText'>Tic-Tac-Toe</h1>
            <div className="WrapperField">
                <Field key={resetKey} gameOn={gameOn} onWin={(w) => { setWinner(w); setGameOn(false); }} />
                <button onClick={handleReset}>Reset</button>
                {winner && <ProduceWin winner={winner} onRestart={handleReset} />}

            </div>
        </div>
    );
}

function ProduceWin({winner, onRestart}) {
    return (
        <div className='WinnetPlate'>
            <h2 className='WinnerTitle'>{winner} win!</h2>
            <button
                className='RestartButton'
                onClick={() => { if (typeof onRestart === 'function') onRestart(); }}
            >
                RESTART
            </button>
        </div>
    );
}

