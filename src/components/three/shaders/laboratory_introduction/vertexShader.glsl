// attribute vec3 position;
attribute float offset;
attribute float speed;

uniform float move;
uniform float pointSize;
uniform float time;

varying vec2 vUv;

float PI = 3.1415926538;

void main() {
	// vUv = uv;
	// gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	vec3 pos = position;

	pos.z = position.z + move * speed + offset;

	vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
	// gl_PointSize = 23.0 * (1.0 / -mvPosition.z);
	gl_PointSize = pointSize;
	gl_Position = projectionMatrix * mvPosition;
}