import {
  put,
} from 'redux-saga/effects';

export default function* setProjects(action) {
  yield put({ type: 'LOADING_START' });
  try {
    const { data } = action;
    yield put({
      type: 'SET_PROJECTS',
      data,
    });
  } catch (e) {
    yield put({
      type: 'FETCH_FAILED',
      message: e.message,
    });
  }
  yield put({ type: 'LOADING_STOP' });
}
