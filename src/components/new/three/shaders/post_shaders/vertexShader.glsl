uniform sampler2D uDiffuse;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform int uType;
uniform float uVelocity;
varying vec2 vUv;

float PI = 3.1415926538;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}