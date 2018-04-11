import { combineReducers } from 'redux';

// import standingsReducer from './standingsReducer';
import teamReducer from './teamReducer';

export default combineReducers({
  // standings: standingsReducer,
  team: teamReducer
});
