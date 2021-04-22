import * as types from "../constants/blog.constants";

const initialState = {
  loading: false,
  error: null,
};

const blogReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BLOGS_REQUEST:
      state.loading = true;
      break;

    case types.GET_BLOGS_SUCCESS:
      state.loading = false;
      break;

    case types.GET_BLOGS_FAILURE:
      state.loading = false;
      break;

    default:
      return state;
  }

  return { ...state };
};

export default blogReducers;
