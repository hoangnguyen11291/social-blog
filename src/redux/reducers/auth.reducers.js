import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  accessToken: localStorage.getItem("accessToken"),
};

const authReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST_START:
      state.loading = true;
      break;
    case types.REGISTER_REQUEST_FAIL:
      state.loading = false;
      toast.error("Fail to Regist");
      break;
    case types.REGISTER_REQUEST_SUCCESS:
      state.loading = false;
      console.log("success");
      toast.success("Succesful Regist, Welcome!!!");
      break;
    case types.LOGIN_REQUEST:
      state.loading = true;
      break;

    case types.LOGIN_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      state.user = { ...payload.data };
      state.accessToken = payload.accessToken;
      state.loading = false;
      state.isAuthenticated = true;
      break;

    case types.LOGIN_FAILURE:
      state.error = payload;
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      break;

    case types.LOGOUT:
      state.accessToken = null;
      localStorage.clear();
      break;

    default:
      return state;
  }

  return { ...state };
};

export default authReducers;
