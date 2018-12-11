import {
  takeLatest,
} from 'redux-saga/effects';

import setProjects from './setProjects';

export default class Saga {
  static getSagas() {
    function* mySaga() {
      yield takeLatest('INIT', setProjects);
    }
    return mySaga;
  }
  constructor() {
    this.init = this.init.bind(this);
  }
  init(settings, sagaMiddleware) {
    this.settings = settings;
    sagaMiddleware.run(Saga.getSagas());
  }
}
