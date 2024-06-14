uniform sampler2D tDiffuse;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform int uType;
uniform float uVelocity;
varying vec2 vUv;

const float pi = 3.1415925;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
}


