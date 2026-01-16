import { SET_CELL } from "./boilerplate";

export function setCell(index, payload) {
    return {
        type: SET_CELL,
        index: index,
        payload: payload
    };
}