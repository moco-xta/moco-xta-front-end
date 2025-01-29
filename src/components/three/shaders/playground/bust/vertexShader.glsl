varying vec2 vUv;
varying vec2 vCoordinates;

attribute vec3 aCoordinates;

float PI = 3.1415926538;

void main() {
	vUv = uv;

	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
	gl_PointSize = 10.0 * (1.0 / -mvPosition.z);
	gl_Position = projectionMatrix * mvPosition;
	vCoordinates = aCoordinates.xy;
}