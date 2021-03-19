import {
  CREATE_BUCKET_FAILURE,
  CREATE_BUCKET_REQUEST,
  CREATE_BUCKET_SUCCESS,
  GET_BUCKET_LIST_REQUEST,
  GET_BUCKET_LIST_FAILURE,
  GET_BUCKET_LIST_SUCCESS,
} from "./actionConstants";

const initState = {
  isLoading: false,
  error: false,
  success: false,
  bucketList: [],
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
        bucketList: payload,
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
        bucketList: payload,
      };

    default:
      return state;
  }
};
