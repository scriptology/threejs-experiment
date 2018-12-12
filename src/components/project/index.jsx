import React from 'react';
import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

const renderProject = (projectId) => {
  const wrapper = document.getElementById(projectId);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    1,
    1000,
  );
  // x, y, z
  camera.position.set(
    0,
    200,
    500,
  );
  camera.lookAt(scene.position);

  const renderer = new THREE.WebGLRenderer();
  renderer.shadowMapEnabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  wrapper.appendChild(renderer.domElement);

  // floor
  const planeGeometry = new THREE.PlaneGeometry(500, 500);
  const planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: false });
  const floor = new THREE.Mesh(planeGeometry, planeMaterial);
  floor.rotation.x = (-90 * Math.PI) / 180;
  floor.position.set(0, 0, 0);
  floor.receiveShadow = true;
  scene.add(floor);

  // cube
  const geometry = new THREE.BoxBufferGeometry(100, 100, 100);
  const material = new THREE.MeshPhongMaterial({
    color: 0x1770d4,
    wireframe: false,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 150, 0);
  cube.receiveShadow = true;
  cube.castShadow = true;
  scene.add(cube);

  // ambientLight
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);

  // ambientLight
  const pointLight = new THREE.PointLight(0xffffff, 2, 500);
  pointLight.position.set(0, 400, 100);
  pointLight.castShadow = true;
  scene.add(pointLight);

  const sphereSize = 100;
  const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
  scene.add(pointLightHelper);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const animate = function () {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  animate();
};

export default class Project extends React.Component {
  componentDidMount() {
    console.log(THREE);
    console.log(this);
    renderProject('project-1');
  }
  render() {
    return (
      <div id="project-1">

      </div>
    );
  }
}
