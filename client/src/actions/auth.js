import { AUTH } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await api.signin(formData);

    const action = { type: AUTH, payload: data };
    dispatch(action);

    history.push('/');
  } catch (error) {
    console.log(error);
  }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user
    console.log('actions', formData)
    const { data } = await api.signup(formData);

    const action = { type: AUTH, payload: data };
    dispatch(action);

    history.push('/');
  } catch (error) {
    console.log(error);
  }
}