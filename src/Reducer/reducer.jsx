import { SET_CELL, CLEAR_CELLS } from './boilerplate';

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
  switch(action.type)
  {
    case SET_CELL:
      const next = state.slice();
      next[action.index] = action.payload;
      return next;
    case CLEAR_CELLS:
      return Array(9).fill('');
    default:
      return state;
  }
}