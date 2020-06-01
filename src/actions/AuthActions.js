import axios from 'axios';

import { ACTIONST_TYPE, ROUTES } from '../const';

export const onChangePhone = (phoneNumber) => ({
  type: ACTIONST_TYPE.ON_CHANGE_PHONE,
  payload: phoneNumber,
});

export const onChangePassword = (passwordValue) => ({
  type: ACTIONST_TYPE.ON_CHANGE_PASSWORD,
  payload: passwordValue,
});

const signInStart = () => ({
  type: ACTIONST_TYPE.SIGN_IN_START,
});

const signInSuccess = (user) => ({
  type: ACTIONST_TYPE.SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = (err) => ({
  type: ACTIONST_TYPE.SIGN_IN_FAILURE,
  payload: err,
});

export const signIn = (phone, password, history) => {
  return async (dispatch) => {
    dispatch(signInStart());
    try {
      const response = await axios.post(`http://localhost:3001/auth/sign-in`, {
        phone,
        password,
      });
      history.push(`${ROUTES.USERS}/${response.data.index}`);
      dispatch(signInSuccess(response.data));
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };
};

export const signOut = () => ({
  type: ACTIONST_TYPE.SIGN_OUT,
});

export const signInWithToken = (token) => {
  return async (dispatch) => {
    dispatch(signInStart());
    try {
      const response = await axios.post(`http://localhost:3001/auth/sign-in`, {
        token,
      });
      dispatch(signInSuccess(response.data));
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };
};
