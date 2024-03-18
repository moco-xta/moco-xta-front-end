uniform float scale;
uniform float uShift;
varying vec2 vUv;
float PI = 3.1415926535897932384626433832795;
void main() {
	vec3 pos = position;
	/* pos.z = pos.z + ((cos(uv.x * PI) * uShift * 5.0) * 0.125); */
	pos.z = pos.z + pow(2.0, sin(uv.x * PI));
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}