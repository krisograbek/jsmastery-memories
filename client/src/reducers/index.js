import { combineReducers } from "redux";
import posts from './posts';
import auth from './auth';

// we could write posts: posts, but it's not necessary
export default combineReducers({ posts, auth });