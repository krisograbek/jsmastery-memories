// we export default, the first line could be
// const reducer = (state = [], action) => {
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      // adding a new post
      return [...state, action.payload];
    default:
      return state;
  }
}