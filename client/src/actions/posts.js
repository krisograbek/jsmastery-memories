import * as api from '../api';

// action creators
// we need to add async (dispatch) because we're making
// api calls that are asyncronus
// under the hood, we're using thunk but I don't know where
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