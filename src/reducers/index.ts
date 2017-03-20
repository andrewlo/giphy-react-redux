import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;

import counter from './counter';
import session from './session';
import giphy from './giphy';

const rootReducer = combineReducers({
  session,
  counter,
  giphy,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
