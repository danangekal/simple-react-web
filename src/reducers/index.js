import { combineReducers } from 'redux';

import homeReducer from './home';
import exploreReducer from './explore';
import friendReducer from './friend';
import postReducer from './post';
import albumReducer from './album';
import photoReducer from './photo';
import profileReducer from './profile';

export default combineReducers({
  homeReducer,
  exploreReducer,
  friendReducer,
  postReducer,
  albumReducer,
  photoReducer,
  profileReducer
});