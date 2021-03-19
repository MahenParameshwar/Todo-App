import axios from "axios";
import * as actionConstants from "./actionConstants";

function createBucketRequest() {
  return {
    type: actionConstants.CREATE_BUCKET_REQUEST,
  };
}

function createBucketSuccess(response) {
  return {
    type: actionConstants.CREATE_BUCKET_SUCCESS,
    payload: response,
  };
}

function createBucketFailure(response) {
  return {
    type: actionConstants.CREATE_BUCKET_FAILURE,
    payload: response,
  };
}

export const makeCreateBucketRequest = ({ token, title }) => (dispatch) => {
  dispatch(createBucketRequest());

  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/createBucketList`,
      { title },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(createBucketSuccess(res.data.bucketList));
    })
    .catch((err) => {
      dispatch(createBucketFailure("Oops!! Somthing went wrong"));
    });
};

function getBucketRequest() {
  return {
    type: actionConstants.GET_BUCKET_LIST_REQUEST,
  };
}

function getBucketSuccess(response) {
  return {
    type: actionConstants.GET_BUCKET_LIST_SUCCESS,
    payload: response,
  };
}

function getBucketFailure(response) {
  return {
    type: actionConstants.GET_BUCKET_LIST_FAILURE,
    payload: response,
  };
}

export const makeGetBucketListRequest = ({ token }) => (dispatch) => {
  dispatch(getBucketRequest());

  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/auth/getBucketList`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(getBucketSuccess(res.data.bucketList));
    })
    .catch((err) => {
      dispatch(getBucketFailure("Oops!! Somthing went wrong"));
    });
};
