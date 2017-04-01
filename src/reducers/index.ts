import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;

import search from './search';
import details from './details';
import trending from './trending';
import ui from './ui';

const rootReducer = combineReducers({
  search,
  details,
  trending,
  ui,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
