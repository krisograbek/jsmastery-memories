import * as api from '../api';

// action creators
// we need to add async (dispatch) because we're making
// api calls that are asyncronus
export const getPosts = () => async (dispatch) => {
  try {
    // in the response there is the data object
    const { data } = await api.fetchPosts();
    const action = { type: 'FETCH_ALL', payload: data }
    // we dispatch instead of returning
    dispatch(action);
  } catch (error) {
    console.log(error.message)
  }
}