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

    // TODO: test initial
    store.dispatch({
      type: 'SET_PROJECTS',
      data: [{
        name: 'cubeRotation',
        camera: {
          name: 'PerspectiveCamera',
          props: {
            fow: 100,
            aspect: 1,
            near: 1,
            far: 1000,
          },
          position: {
            x: 0,
            y: 200,
            z: 500,
          },
        },
        meshes: [
          {
            name: 'floor',
            geometry: {
              name: 'PlaneGeometry',
              props: {
                width: 500,
                height: 500,
              },
              rotateX: (-90 * Math.PI) / 180,
            },
            material: {
              name: 'MeshPhongMaterial',
              props: {
                parameters: {
                  color: 0xffffff,
                  wireframe: false,
                },
              },
            },
            configuration: {
              rotation: { x: -90, y: 0, z: 0 },
              position: { x: 0, y: 0, z: 0 },
              receiveShadow: true,
            },
          },
          {
            name: 'cube',
            geometry: {
              name: 'BoxBufferGeometry',
              props: {
                width: 100,
                height: 100,
                depth: 100,
              },
            },
            material: {
              name: 'MeshPhongMaterial',
              props: {
                parameters: {
                  color: 0x307eff,
                  wireframe: false,
                },
              },
            },
            configuration: {
              position: { x: 0, y: 150, z: 0 },
              receiveShadow: true,
              castShadow: true,
            },
          },
          {
            name: 'cubeTextures',
            geometry: {
              name: 'BoxGeometry',
              props: {
                width: 60,
                height: 60,
                depth: 60,
              },
            },
            material: {
              name: 'MeshFaceMaterial',
              props: {
                materials: [
                  {
                    name: 'MeshPhongMaterial',
                    configuration: {
                      texture: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureBump: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureNormal: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      side: 'DoubleSide',
                    },
                  },
                  {
                    name: 'MeshPhongMaterial',
                    configuration: {
                      texture: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureBump: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureNormal: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      side: 'DoubleSide',
                    },
                  },
                  {
                    name: 'MeshPhongMaterial',
                    configuration: {
                      texture: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureBump: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureNormal: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      side: 'DoubleSide',
                    },
                  },
                  {
                    name: 'MeshPhongMaterial',
                    configuration: {
                      texture: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureBump: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureNormal: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      side: 'DoubleSide',
                    },
                  },
                  {
                    name: 'MeshPhongMaterial',
                    configuration: {
                      texture: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureBump: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureNormal: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      side: 'DoubleSide',
                    },
                  },
                  {
                    name: 'MeshPhongMaterial',
                    configuration: {
                      texture: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureBump: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      textureNormal: '/textures/wooden-floor/woodfloor_diffuse.jpg',
                      side: 'DoubleSide',
                    },
                  },
                ],
              },
            },
            configuration: {
              position: { x: -150, y: 30, z: 0 },
              receiveShadow: true,
              castShadow: true,
            },
          },
        ],
        lights: [
          {
            name: 'AmbientLight',
            props: {
              color: 0xffffff,
              intensity: 0.2,
            },
          },
          {
            name: 'PointLight',
            props: {
              color: 0xffffff,
              intensity: 2,
              distance: 500,
            },
            configuration: {
              position: { x: 0, y: 400, z: 100 },
              castShadow: true,
            },
            helper: {
              name: 'PointLightHelper',
              props: {
                sphereSize: 100,
                color: 0xffffff,
              },
            },
          },
        ],
      }],
    });

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
