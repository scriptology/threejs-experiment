import React from 'react';

import * as THREE from 'three';

const renderProject = (projectId) => {
  const wrapper = document.getElementById(projectId);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  wrapper.appendChild(renderer.domElement);

  // const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  const geometry = new THREE.BoxBufferGeometry(200, 200, 200);
  const material = new THREE.MeshBasicMaterial({
    ambient: 0x555555,
    color: 0x555555,
    specular: 0xffffff,
    shininess: 50,
    shading: THREE.SmoothShading,
  });
  // const material = new THREE.MeshPhongMaterial({
  //   ambient: 0x555555,
  //   color: 0x555555,
  //   specular: 0xffffff,
  //   shininess: 50,
  //   shading: THREE.SmoothShading,
  // });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const light = new THREE.PointLight(0xffffff, 2, 1);
  light.position.set(200, 100, 300);
  scene.add(light);

  const animate = function () {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  animate();


  // const wrapper = document.getElementById(projectId);
  // const scene = new THREE.Scene();
  // const camera = new
  // THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50);
  // // camera.position.z = 30;
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // wrapper.appendChild(renderer.domElement);
  //
  // const group = new THREE.Group();
  // const geometry = new THREE.BufferGeometry();
  // geometry.addAttribute('position', new THREE.Float32BufferAttribute([], 3));
  // const meshMaterial = new THREE.MeshPhongMaterial({
  //   color: 0x156289,
  //   emissive: 0x072534,
  //   side: THREE.DoubleSide,
  //   flatShading: true,
  // });
  // // const cube = new THREE.Mesh(geometry, material);
  // // scene.add(cube);
  //
  // group.add(new THREE.Mesh(geometry, meshMaterial));
  // scene.add(group);
  //
  // const light = new THREE.PointLight(0xffffff, 1.5, 2);
  // light.position.set(500, 500, 500);
  // scene.add(light);
  //
  // camera.position.z = 5;
  //
  // const animate = function () {
  //   window.requestAnimationFrame(animate);
  //   group.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  //   renderer.render(scene, camera);
  // };
  //
  // animate();

  // const lights = [];
  // lights[0] = new THREE.PointLight(0xffffff, 1, 0);
  // lights[1] = new THREE.PointLight(0xffffff, 1, 0);
  // lights[2] = new THREE.PointLight(0xffffff, 1, 0);
  //
  // lights[0].position.set(0, 200, 0);
  // lights[1].position.set(100, 200, 100);
  // lights[2].position.set(-100, -200, -100);
  //
  // scene.add(lights[0]);
  // scene.add(lights[1]);
  // scene.add(lights[2]);
  //
  // const group = new THREE.Group();
  //
  // const geometry = new THREE.BufferGeometry();
  // geometry.addAttribute('position', THREE.Float32BufferAttribute([], 3));
  //
  // const lineMaterial = new THREE.LineBasicMaterial({
  //   color: 0xffffff,
  //   transparent: true,
  //   opacity: 0.5,
  // });
  // const meshMaterial = new THREE.MeshPhongMaterial({
  //   color: 0x156289,
  //   emissive: 0x072534,
  //   side: THREE.DoubleSide,
  //   flatShading: true,
  // });
  //
  // group.add(new THREE.LineSegments(geometry, lineMaterial));
  // group.add(new THREE.Mesh(geometry, meshMaterial));
  //
  // scene.add(group);
  //
  // renderer.render(scene, camera);
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
