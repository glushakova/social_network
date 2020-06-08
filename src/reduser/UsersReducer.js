import { ACTIONST_TYPE } from '../const';

const initialState = {
  users: [],
  loading: false,
  err: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.GET_USERS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONST_TYPE.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    }
    case ACTIONST_TYPE.GET_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    }
    case ACTIONST_TYPE.SORT_USERS: {
      const usersSort = [...state.users];
      return {
        ...state,
        users: usersSort.sort((a, b) => {
          if (a.name.first > b.name.first) {
            return 1;
          }
          if (a.name.first < b.name.first) {
            return -1;
          }
          return 0;
        }),
      };
    }
    default:
      return state;
  }
};
