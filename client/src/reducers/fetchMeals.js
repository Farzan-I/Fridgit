// eslint-disable-next-line import/no-anonymous-default-export
export default (meals = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_ONE':
      return meals;
    default:
      return meals;
  }
}