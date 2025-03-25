uniform float time;
varying vec2 vUv;

float PI = 3.1415926538;

void main() {
	vUv = uv;

	vUv.y += sin(time) * 0.02;

	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}