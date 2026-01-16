import { SET_CELL } from './boilerplate';

// export function reducer(state, action) {
//     switch( action.type) {
//         case "setCell":
//             console.log("SetCell function called")
//             state[action.index] = action.payload; 
//             return state;
//         default:
//             return state;
//     }
// }

export function reducer(state , action) {
  if (action.type === SET_CELL) {
    const next = state.slice();
    next[action.index] = action.payload;
    return next;
  }
  return state;
}