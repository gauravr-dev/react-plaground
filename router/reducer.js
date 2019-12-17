import { LOCATION_CHANGE } from "./constants";

const getInitialState = {
  pathname: "/",
  search: "",
  hash: ""
};

export const routerReducer = (state = getInitialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
