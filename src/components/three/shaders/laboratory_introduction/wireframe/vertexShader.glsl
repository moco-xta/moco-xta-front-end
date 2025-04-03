attribute float min;
attribute float max;

varying vec2 vUv;
varying vec3 pos;
varying float normalizedZPosition;

float PI = 3.1415926538;
void main() {
	vUv = uv;
	pos = position;
	normalizedZPosition = (pos.z + max) / (max - min);

	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}