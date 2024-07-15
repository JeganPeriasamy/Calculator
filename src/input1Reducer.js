const INPUT1 = 'INPUT1';

export const setInput1 = (value) => ({
  type: INPUT1,
  value,
});

const input1Reducer = (state = [], action) => {
  switch (action.type) {
    case INPUT1:
      return action.value;
    default:
      return state;
  }
};

export default input1Reducer;


// const initialState ={
//          Input1 :0,
//         Input2:0,
//         Operation:"",
//         Output:0

//     }
// //Action Type
// const ADD = "+";
// const SUB = "-";
// const DIV = "/";
// const MULTI = "*";

// // Actions
// const add = () => ({ type: ADD });
// const sub = () => ({ type: SUB });
// const div = () => ({ type: DIV });
// const multi = () => ({ type: MULTI });

// // Reducer
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD:
//       return state.Input1 + state.Input2
//     case SUB:
//       return state.Input1 - state.Input2
//     case DIV:
//       return state.Input1 / state.Input2
//     case MULTI:
//       return state.Input1 * state.Input2
//     default:
//       return state;
//   }
// };

// export default counterReducer;