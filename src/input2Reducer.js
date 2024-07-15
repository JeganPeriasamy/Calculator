const INPUT2 = 'INPUT2';

export const setInput2 = (value) => ({
  type: INPUT2,
  value,
});

const input1Reducer = (state = [], action) => {
  switch (action.type) {
    case INPUT2:
      return action.value;
    default:
      return state;
  }
};

export default input1Reducer;