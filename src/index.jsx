import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import Saga from './sagas/';
import App from './app';

const renderBuilder = (selectorName) => {
  const elements = document.querySelectorAll(selectorName);
  elements.forEach((el) => {
    const sagaMiddleware = createSagaMiddleware();
    /* eslint-disable no-underscore-dangle */
    const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );
    /* eslint-enable */
    const mySaga = new Saga();

    mySaga.init({}, sagaMiddleware);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      el,
    );
  });
};

// development mode
if (module.hot) {
  window.renderCuriosityBuilder = renderBuilder;
  renderBuilder('.threejs-experiment-wrapper');
} else {
  // production mode
  window.renderCuriosityBuilder = renderBuilder;
}
