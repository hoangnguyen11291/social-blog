import { combineReducers } from "redux";

import authReducers from "./auth.reducers";
import blogReducers from "./blog.reducers";

export default combineReducers({
  blog: blogReducers,
  auth: authReducers,
});
