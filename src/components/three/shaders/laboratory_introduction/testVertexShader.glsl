varying vec2 vUv;
uniform sampler2D uPosition;
attribute vec2 reference;
float PI = 3.1415926538;

void main() {
	vUv = uv;
  vec3 pos = texture2D(uPosition, reference).xyz;
	vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
	// gl_PointSize = 23.0 * (1.0 / -mvPosition.z);
	gl_PointSize = 25.0;
	gl_Position = projectionMatrix * mvPosition;
}