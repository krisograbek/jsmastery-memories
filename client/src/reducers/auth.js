import { AUTH, LOGOUT } from "../constants/actionTypes"

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      // set the data to local storage
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      console.log(action?.payload)
      return { ...state, authData: action?.payload };
    case LOGOUT:
      // probably delete from local storage
      localStorage.removeItem('profile');
      return { ...state, authData: null };
    default:
      return state;
  }
}