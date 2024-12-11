uniform float uAlpha;
uniform sampler2D uTexture;
uniform vec2 uMouse;
varying vec2 vUv;

float PI = 3.1415926538;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );
}