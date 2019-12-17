import { combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { routePaths } from '../routes/routes';
import user from './user/reducers';

const { reducer: location } = connectRoutes(routePaths);

const rootReducer = combineReducers({
  location,
  user
});

export default rootReducer;