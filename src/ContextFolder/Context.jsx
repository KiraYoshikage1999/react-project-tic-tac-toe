import { createContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";
import { setCell } from "../Reducer/actions";

export const XOContext = createContext();

export function Context({children}) {
    const [cells, dispatch] = useReducer(reducer, Array(9).fill(''));

    const setXCell = (index) => {
        console.log("Setting X at index: ", index);
        dispatch(setCell(index, 'X'));
    }

    const setOCell = (index) => {
        console.log("Setting O at index: ", index);
        dispatch(setCell(index, 'O'));
    }

    const value = { cells, setXCell, setOCell };
    return (
        <XOContext.Provider value={value}>
            {children}
        </XOContext.Provider>
    )
}

