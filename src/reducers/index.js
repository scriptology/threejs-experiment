import { combineReducers } from 'redux';
import loading from './loading';
import projects from './projects';

const builderApp = combineReducers({
  loading,
  projects,
});

export default builderApp;
