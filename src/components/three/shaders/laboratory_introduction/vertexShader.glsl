varying vec2 vUv;
float PI = 3.1415926538;
void main() {
	// vUv = uv;
	// gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	vec3 pos = position;
	vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
	// gl_PointSize = 23.0 * (1.0 / -mvPosition.z);
	gl_PointSize = 10.0;
	gl_Position = projectionMatrix * mvPosition;
}