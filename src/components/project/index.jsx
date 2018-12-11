import React from 'react';
import THREE from 'three.js';

const renderProject = (projectId) => {
  const wrapper = document.getElementById(projectId);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  wrapper.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x156289 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // const light = new THREE.SpotLight(0xffffff, 2.0, 1000);
  // light.target = cube;
  // light.position.set(50, 50, 50);
  // scene.add(light);

  camera.position.z = 5;

  const animate = function () {
    window.requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
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
