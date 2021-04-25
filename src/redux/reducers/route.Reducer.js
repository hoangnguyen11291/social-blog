/* eslint-disable default-case */
const initialState = {
  redirectTo: null,
};

const routeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REDIRECT_TO":
      state.redirectTo = payload;
      break;
  }
  return { ...state };
};
export default routeReducer;
