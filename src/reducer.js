import watchReducer from './reducers/watchReducer';
import movieReducer from './reducers/movieReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  watchReducer,
  movieReducer,
  router: routerReducer
});
