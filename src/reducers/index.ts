import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;

import search from './search';
import details from './details';

const rootReducer = combineReducers({
  search,
  details,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
