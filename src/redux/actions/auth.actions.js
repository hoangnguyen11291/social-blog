import api from "../../apiService";
import * as types from "../constants/auth.constants";
import { toast } from "react-toastify";
import { routeActions } from "./route.actions";

const registerUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST_START", payload: null });
    const res = await api.post("/users", data);

    dispatch(routeActions.redirect("/login"));

    dispatch({ type: "REGISTER_REQUEST_SUCCESS", payload: res });
  } catch (err) {
    dispatch({ type: "REGISTER_REQUEST_FAIL", payload: null });
    console.log(err.message);
  }
};

const loginRequest = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post(`/auth/login`, { email, password });
    dispatch(routeActions.redirect("/"));
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
    const userName = `${res.data.data.user.name}`;
    toast.success(`Welcome, ${userName}`);
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.LOGIN_FAILURE, payload: null });
  }
};

const logoutRequest = () => (dispatch) => {
  dispatch({ type: types.LOGOUT, payload: null });
  try {
    dispatch(routeActions.redirect("/"));
  } catch (error) {
    toast.error(error.message);
  }
};

export const authActions = { registerUser, loginRequest, logoutRequest };
