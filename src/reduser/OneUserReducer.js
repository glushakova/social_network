import { ACTIONST_TYPE } from '../const';

const initialState = {
  user: [],
  loading: false,
  err: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.GET_USER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONST_TYPE.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    case ACTIONST_TYPE.GET_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    }
    default:
      return state;
  }
};
