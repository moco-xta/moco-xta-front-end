varying vec3 vPosition;
varying vec2 vUv;

float PI = 3.1415926538;

void main() {
	vPosition = position;
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}