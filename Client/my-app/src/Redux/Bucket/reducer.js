import {
  CREATE_BUCKET_FAILURE,
  CREATE_BUCKET_REQUEST,
  CREATE_BUCKET_SUCCESS,
  GET_BUCKET_LIST_REQUEST,
  GET_BUCKET_LIST_FAILURE,
  GET_BUCKET_LIST_SUCCESS,
  DELETE_BUCKET_LIST_REQUEST,
  DELETE_BUCKET_LIST_FAILURE,
  DELETE_BUCKET_LIST_SUCCESS,
  UPDATE_BUCKET_LIST_FAILURE,
  UPDATE_BUCKET_LIST_SUCCESS,
  UPDATE_BUCKET_LIST_REQUEST,
  CREATE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_REQUEST,
  DELETE_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
} from "./actionConstants";

const initState = {
  isLoading: false,
  error: false,
  success: false,
  bucketList: [],
  username: "",
};

export const bucketListReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CREATE_BUCKET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_BUCKET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case CREATE_BUCKET_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        bucketList: payload.bucketList,
        username: payload.username,
      };
    case GET_BUCKET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BUCKET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case GET_BUCKET_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        bucketList: payload.bucketList,
        username: payload.username,
      };
    case DELETE_BUCKET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_BUCKET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case DELETE_BUCKET_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        bucketList: payload.bucketList,
        username: payload.username,
      };
    case UPDATE_BUCKET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_BUCKET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case UPDATE_BUCKET_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        bucketList: payload.bucketList,
        username: payload.username,
      };
    case CREATE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        bucketList: payload.bucketList,
        username: payload.username,
      };
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        bucketList: payload.bucketList,
        username: payload.username,
      };
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: payload,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        bucketList: payload.bucketList,
        username: payload.username,
      };

    default:
      return state;
  }
};
