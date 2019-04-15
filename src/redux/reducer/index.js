import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import defaultReducer from './default';

export default combineReducers({
  form,
  defaultReducer,
});
