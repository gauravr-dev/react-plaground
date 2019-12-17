import { createAction } from "redux-actions";

export const userDataLoaded = createAction("user/USER_DATA_LOADED");

export const fetchUserData = dispatch => {
  const avatar = `https://api.adorable.io/avatars/${Math.random()}`;
  setTimeout(() => {
    // fake async call
    dispatch(userDataLoaded({ avatar }));
  }, 500);
};
