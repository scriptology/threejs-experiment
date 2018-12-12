import React from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

const rotateObject = (object, degreeX = 0, degreeY = 0, degreeZ = 0) => {
  object.rotateX(THREE.Math.degToRad(degreeX));
  object.rotateY(THREE.Math.degToRad(degreeY));
  object.rotateZ(THREE.Math.degToRad(degreeZ));
};

class PageProject extends React.Component {
  static getDerivedStateFromProps(props) {
    const project = props.projects.find(p => p.name === props.match.params.name);
    if (project) {
      return {
        project,
      };
    }
    props.history.push('/404');
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      project: null,
    };
  }
  componentDidMount() {
    const { project } = this.state;
    if (project) {
      const meshes = {};
      const wrapper = document.getElementById('wrapper');
      const scene = new THREE.Scene();

      const renderer = new THREE.WebGLRenderer();
      renderer.shadowMapEnabled = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      wrapper.appendChild(renderer.domElement);

      // camera
      const cameraProps = Object.values(project.camera.props);
      cameraProps.aspect = window.innerWidth / window.innerHeight;
      const cameraPosition = Object.values(project.camera.position);
      const camera = new THREE[project.camera.name](...cameraProps);
      camera.position.set(...cameraPosition);
      camera.lookAt(scene.position);

      // meshes
      project.meshes.forEach((mesh) => {
        const geometry = new THREE[mesh.geometry.name](...Object.values(mesh.geometry.props));

        let material;
        if (mesh.material.props.materials) {
          const props = mesh.material.props.materials.map((materialTexture) => {
            const resultMaterial = new THREE[materialTexture.name]({
              map: new THREE.TextureLoader().load(materialTexture.configuration.texture),
              bumpMap: new THREE.TextureLoader().load(materialTexture.configuration.textureBump),
              normalMap: new THREE.TextureLoader()
                .load(materialTexture.configuration.textureNormal),
              side: THREE[materialTexture.configuration.side],
            });
            return resultMaterial;
          });
          material = new THREE[mesh.material.name](props);
        } else {
          material = new THREE[mesh.material.name](...Object.values(mesh.material.props));
        }

        const result = new THREE.Mesh(geometry, material);
        if (mesh.configuration) {
          if (mesh.configuration.rotation) {
            rotateObject(result, ...Object.values(mesh.configuration.rotation));
          }
          if (mesh.configuration.position) {
            result.position.set(...Object.values(mesh.configuration.position));
          }
          result.receiveShadow = mesh.configuration.receiveShadow || false;
          result.castShadow = mesh.configuration.castShadow || false;
        }
        scene.add(result);
        meshes[mesh.name] = result;
      });

      // lights
      project.lights.forEach((light) => {
        const result = new THREE[light.name](...Object.values(light.props));
        if (light.position) {
          result.position.set(...Object.values(light.position));
        }

        if (light.configuration) {
          if (light.configuration.rotation) {
            rotateObject(result, ...Object.values(light.configuration.rotation));
          }
          if (light.configuration.position) {
            result.position.set(...Object.values(light.configuration.position));
          }
          result.receiveShadow = light.configuration.receiveShadow || false;
          result.castShadow = light.configuration.castShadow || false;
        }
        scene.add(result);
        if (light.helper) {
          const helper = new THREE[light.helper.name](result, ...Object.values(light.helper.props));
          scene.add(helper);
        }
      });

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      const animate = function () {
        meshes.cube.rotation.x += 0.005;
        meshes.cube.rotation.y += 0.005;

        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
      };
      animate();
    }
  }
  render() {
    return (
      <div id="wrapper" />
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(PageProject);
