import { combineReducers } from "redux";

import authReducers from "./auth.reducers";
import blogReducers from "./blog.reducers";
import routeReducer from "./route.Reducer";

export default combineReducers({
  blog: blogReducers,
  auth: authReducers,
  route: routeReducer,
});
