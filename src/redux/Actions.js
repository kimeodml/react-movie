import { authService } from "Fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as types from "./ActionTypes";

const SignUp = () => ({
  type: types.SIGNUP,
});
const SignUpSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});
export const SignUpError = (error) => ({
  type: types.SIGNUP_ERROR,
  payload: error,
});

const Login = () => ({
  type: types.LOGIN,
});
const LoginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const LoginError = (error) => ({
  type: types.LOGIN_ERROR,
  payload: error,
});
const Logout = () => ({
  type: types.LOGOUT,
});

const LogoutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
  payload: user,
});
const LogoutError = (error) => ({
  type: types.LOGOUT_ERROR,
  payload: error,
});

export const SetUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const SignUpInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(SignUp());
    createUserWithEmailAndPassword(authService, email, password)
      .then(({ user }) => {
        dispatch(SignUpSuccess(user));
      })
      .catch((error) => dispatch(SignUpError(error.message)));
  };
};

export const LoginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(Login());
    signInWithEmailAndPassword(authService, email, password)
      .then(({ user }) => {
        dispatch(LoginSuccess(user));
      })
      .catch((error) => dispatch(LoginError(error.message)));
  };
};

export const LogoutInitiate = () => {
  return function (dispatch) {
    dispatch(Logout());
    authService
      .signOut()
      .then((res) => dispatch(LogoutSuccess()))
      .catch((error) => dispatch(LogoutError(error.message)));
  };
};
