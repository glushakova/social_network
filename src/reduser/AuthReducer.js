import { ACTIONST_TYPE } from '../const';

const initialState = {
  phone: '',
  password: '',
  user: null,
  loading: false,
  error: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONST_TYPE.ON_CHANGE_PHONE: {
      return {
        ...state,
        phone: action.payload,
      };
    }
    case ACTIONST_TYPE.ON_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case ACTIONST_TYPE.SIGN_IN_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONST_TYPE.SIGN_IN_SUCCESS: {
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...initialState,
        user: action.payload,
        token: action.payload.token,
      };
    }
    case ACTIONST_TYPE.SIGN_IN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case ACTIONST_TYPE.SIGN_OUT: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};
