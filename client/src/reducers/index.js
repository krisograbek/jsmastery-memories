import { combineReducers } from "redux";
import posts from './posts';

// we could write posts: posts, but it's not necessary
export default combineReducers({ posts });