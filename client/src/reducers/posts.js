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
    // Update and increlment likes do exactly the same
    case 'UPDATE':
    case 'INCREMENT_LIKES':
      // adding a new post
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case 'DELETE':
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
}