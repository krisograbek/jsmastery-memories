import { FETCH_ALL, CREATE, UPDATE, DELETE, INCREMENT_LIKES } from '../constants/actionTypes';
import * as api from '../api';

// action creators
// we need to add async (dispatch) because we're making
// api calls that are asyncronus
// under the hood, we're using thunk but I don't know where
export const getPosts = () => async (dispatch) => {
  try {
    // in the response there is the data object
    const { data } = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: data }
    console.log("getPosts actions: ", data)
    // we dispatch instead of returning
    dispatch(action);
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    const action = { type: CREATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    const action = { type: UPDATE, payload: data }
    dispatch(action);

  } catch (error) {
    console.log(error.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    const action = { type: DELETE, payload: id }
    dispatch(action)

  } catch (error) {
    console.log(error)
  }
}

export const incrementLikes = (id) => async (dispatch) => {
  try {
    // this response comes from controllers res.json(updatedPost)
    const { data } = await api.incrementLikes(id);
    const action = { type: INCREMENT_LIKES, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error)
  }
}
