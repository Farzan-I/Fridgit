// eslint-disable-next-line import/no-anonymous-default-export
export default (recipes = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_ONE':
      return recipes;
    default:
      return recipes;
  }
}