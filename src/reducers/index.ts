import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;

import counter from './counter';
import session from './session';
import search from './search';
import details from './details';

const rootReducer = combineReducers({
  session,
  counter,
  search,
  details,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
