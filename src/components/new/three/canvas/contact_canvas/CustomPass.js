import * as THREE from 'three'

import vertexShader from '../../shaders/post_shaders/vertexShader.glsl'
import fragmentShader from '../../shaders/post_shaders/fragmentShader.glsl'

const CustomPass = {
  name: 'CustomPass',
  uniforms: {
    tDiffuse: { value: null },
    uMouse: { value: new THREE.Vector2(-10, -10) },
    uResolution: {
      value: new THREE.Vector2(1, window.innerHeight / window.innerWidth),
    },
    uType: { value: 0 },
    uVelocity: { value: 0 },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
}

export { CustomPass }
