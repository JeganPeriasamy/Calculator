
const OUTPUT = 'OUTPUT';

export const outputValue = (value) => ({
  type: OUTPUT,
  value,
});

const OutputReducer = (state = [], action) => {
  switch (action.type) {
    case OUTPUT:
      return action.value;
    default:
      return state;
  }
};

export default OutputReducer;