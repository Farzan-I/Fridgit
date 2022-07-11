// eslint-disable-next-line import/no-anonymous-default-export
export default (instructions = {
  "analyzedInstructions": [""]
}, action) => {
  switch (action.type) {
    case 'FETCH_INSTRUCTIONS':
      return action.payload;
    default:
      return instructions;
  }
}
