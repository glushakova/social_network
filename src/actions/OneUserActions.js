import axios from 'axios';

import { ACTIONST_TYPE } from '../const';

const getUserStart = () => ({
  type: ACTIONST_TYPE.GET_USER_START,
});

const getUserSuccess = (user) => ({
  type: ACTIONST_TYPE.GET_USER_SUCCESS,
  payload: user,
});

const getUserFailure = (err) => ({
  type: ACTIONST_TYPE.GET_USER_FAILURE,
  payload: err,
});

export const getUser = (index) => {
  return async (dispatch) => {
    dispatch(getUserStart());
    try {
      const response = await axios.get(
        `https://serverless-backend-ky9b8rmuq.now.sh/api/users/${index}`
      );
      dispatch(getUserSuccess(response.data));
    } catch (err) {
      dispatch(getUserFailure(err.message));
    }
  };
};
