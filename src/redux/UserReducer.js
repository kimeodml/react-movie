import * as types from "./ActionTypes";

const initialState = {
  loading: false,
  currentUser: undefined,
  error: null,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
    case types.LOGIN:
    case types.LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case types.SIGNUP_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
      alert(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
