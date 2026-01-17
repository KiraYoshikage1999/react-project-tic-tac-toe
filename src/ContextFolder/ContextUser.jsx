import { createContext, useReducer } from "react";

export const ContextUser = createContext();

export function ContextUserProvider({children}) {
    // const user1 = { name: "Player 1", symbol: "X", userTurn: true };
    // const user2 = { name: "Player 2", symbol: "O", userTurn: false };
    // const value = {user1, user2};
    return (
        <ContextUser.Provider value={value}>
            {children}
        </ContextUser.Provider>
    )
}


