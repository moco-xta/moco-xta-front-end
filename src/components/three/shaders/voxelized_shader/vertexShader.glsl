attribute vec3 center;
uniform float triScale; 
varying vec2 vUv;
varying vec3 vNormal;
float PI = 3.1415926538;
void main() {
	vUv = uv;
	vNormal = normal;
	vec3 pos = position;
	pos = (pos - center) * triScale + center;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}