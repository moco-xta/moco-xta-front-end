uniform vec4 uResolution;
uniform sampler2D uTexture1;
varying vec2 vUv;

float PI = 3.1415926538;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}


