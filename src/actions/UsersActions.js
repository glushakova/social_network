import axios from 'axios';

import { ACTIONST_TYPE } from '../const';

const getUsersStart = () => ({
  type: ACTIONST_TYPE.GET_USERS_START,
});

const getUsersSuccess = (users) => ({
  type: ACTIONST_TYPE.GET_USERS_SUCCESS,
  payload: users,
});

const getUsersFailure = (err) => ({
  type: ACTIONST_TYPE.GET_USERS_FAILURE,
  payload: err,
});

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(getUsersStart());
    try {
      const response = await axios.get(
        'https://serverless-backend-ky9b8rmuq.now.sh/api/users'
      );
      dispatch(getUsersSuccess(response.data));
    } catch (err) {
      dispatch(getUsersFailure(err.message));
    }
  };
};
