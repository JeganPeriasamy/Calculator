const ADD = "+";
const SUB = "-";
const DIV = "/";
const MULTI = "*";

const initialState = {
  input1: 5,
  input2: 0,
  operation: "",
  output: 0,
};
export const add = (value) => ({
  type: ADD,
  value,
  
});

export const sub = (value) => ({
  type: SUB,
  value,
});
export const div = (value) => ({
  type: DIV,
  value,
});
export const multi = (value) => ({
  type: MULTI,
  value,
});

const opeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return (state.output = state.input1 + state.input2);
    case SUB:
      return (state.output = state.input1 - state.input2);
    case MULTI:
      return (state.output = state.input1 * state.input2);
    case DIV:
      return (state.output = state.input1 / state.input2);
    default:
      return state;
  }
};

export default opeReducer;

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
