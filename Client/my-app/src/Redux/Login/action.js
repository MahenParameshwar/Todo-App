import axios from "axios";
import * as actionConstants from "./actionConstants";

function loginRequest() {
  return {
    type: actionConstants.LOGIN_REQUEST,
  };
}

function loginSuccess(response) {
  return {
    type: actionConstants.LOGIN_SUCCESS,
    payload: response,
  };
}

function loginFailure(response) {
  return {
    type: actionConstants.LOGIN_FAILURE,
    payload: response,
  };
}

export function loginErrorSuccessReset() {
  return {
    type: actionConstants.LOGIN_ERROR_SUCCESS_RESET,
  };
}

export const makeLoginRequest = ({ email, password }) => (dispatch) => {
  dispatch(loginRequest());

  axios
    .post(`${process.env.REACT_APP_SERVER_URL}/api/login`, {
      email,
      password,
    })
    .then((res) => {
      saveTokenToLocalStorage(res.data);
      dispatch(loginSuccess());
      console.log(res);
    })
    .catch((err) => {
      dispatch(loginFailure(err.response.data.message));
    });
};

const saveTokenToLocalStorage = ({ token }) => {
  localStorage.setItem("token", token);
};
