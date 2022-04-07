// we export default, the first line could be

import Posts from "../components/Posts/Posts";

// const reducer = (state = [], action) => {
export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      // adding a new post
      return [...posts, action.payload];
    case 'UPDATE':
      // adding a new post
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    default:
      return posts;
  }
}