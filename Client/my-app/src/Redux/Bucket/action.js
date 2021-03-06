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
      dispatch(createBucketSuccess(res.data));
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
      dispatch(getBucketSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getBucketFailure("Oops!! Somthing went wrong"));
    });
};

function updateBucketRequest() {
  return {
    type: actionConstants.UPDATE_BUCKET_LIST_REQUEST,
  };
}

function updateBucketSuccess(response) {
  return {
    type: actionConstants.UPDATE_BUCKET_LIST_SUCCESS,
    payload: response,
  };
}

function updateBucketFailure(response) {
  return {
    type: actionConstants.UPDATE_BUCKET_LIST_FAILURE,
    payload: response,
  };
}

export const makeUpdateBucketListRequest = ({ token, bucketId, title }) => (
  dispatch
) => {
  dispatch(updateBucketRequest());

  axios
    .put(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/updateBucketList/${bucketId}`,
      { title },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(updateBucketSuccess(res.data));
    })
    .catch((err) => {
      dispatch(updateBucketFailure("Oops!! Somthing went wrong"));
    });
};

function deleteBucketRequest() {
  return {
    type: actionConstants.DELETE_BUCKET_LIST_REQUEST,
  };
}

function deleteBucketSuccess(response) {
  return {
    type: actionConstants.DELETE_BUCKET_LIST_SUCCESS,
    payload: response,
  };
}

function deleteBucketFailure(response) {
  return {
    type: actionConstants.DELETE_BUCKET_LIST_FAILURE,
    payload: response,
  };
}

export const makeDeleteBucketListRequest = ({ token, bucketId }) => (
  dispatch
) => {
  dispatch(deleteBucketRequest());

  axios
    .delete(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/deleteBucketList/${bucketId}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(deleteBucketSuccess(res.data));
    })
    .catch((err) => {
      dispatch(deleteBucketFailure("Oops!! Somthing went wrong"));
    });
};

function createTodoRequest() {
  return {
    type: actionConstants.CREATE_TODO_REQUEST,
  };
}

function createTodoSuccess(response) {
  return {
    type: actionConstants.CREATE_TODO_SUCCESS,
    payload: response,
  };
}

function createTodoFailure(response) {
  return {
    type: actionConstants.CREATE_TODO_FAILURE,
    payload: response,
  };
}

export const makeCreateTodoRequest = ({ token, task, bucketId }) => (
  dispatch
) => {
  dispatch(createTodoRequest());

  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/createTodo/${bucketId}`,
      { task },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(createTodoSuccess(res.data));
    })
    .catch((err) => {
      dispatch(createTodoFailure("Oops!! Somthing went wrong"));
    });
};

function updateTodoRequest() {
  return {
    type: actionConstants.UPDATE_TODO_REQUEST,
  };
}

function updateTodoSuccess(response) {
  return {
    type: actionConstants.UPDATE_TODO_SUCCESS,
    payload: response,
  };
}

function updateTodoFailure(response) {
  return {
    type: actionConstants.UPDATE_TODO_FAILURE,
    payload: response,
  };
}

export const makeUpdateTodoRequest = ({ token, task, isDone, todoId }) => (
  dispatch
) => {
  dispatch(updateTodoRequest());

  axios
    .put(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/updateTodo/${todoId}`,
      { task, isDone },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(updateTodoSuccess(res.data));
    })
    .catch((err) => {
      dispatch(updateTodoFailure("Oops!! Somthing went wrong"));
    });
};

function deleteTodoRequest() {
  return {
    type: actionConstants.DELETE_TODO_REQUEST,
  };
}

function deleteTodoSuccess(response) {
  return {
    type: actionConstants.DELETE_TODO_SUCCESS,
    payload: response,
  };
}

function deleteTodoFailure(response) {
  return {
    type: actionConstants.DELETE_TODO_FAILURE,
    payload: response,
  };
}

export const makeDeleteTodoRequest = ({ token, bucketId, todoId }) => (
  dispatch
) => {
  dispatch(deleteTodoRequest());

  axios
    .delete(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/deleteTodo?bucketId=${bucketId}&todoId=${todoId}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(deleteTodoSuccess(res.data));
    })
    .catch((err) => {
      dispatch(deleteTodoFailure("Oops!! Somthing went wrong"));
    });
};
