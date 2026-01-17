import { SET_CELL, CLEAR_CELLS } from "./boilerplate";

export function setCell(index, payload) {
    return {
        type: SET_CELL,
        index: index,
        payload: payload
    };
}

export function clearCells() {
    return {
        type: CLEAR_CELLS,
    };
}