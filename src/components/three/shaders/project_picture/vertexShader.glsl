varying vec2 vUv;
uniform float time;
uniform float uDistanceFromCenter;

float PI = 3.1415926538;

void main() {
	vUv = (uv- vec2(0.5)) * (0.8 - 0.2 * uDistanceFromCenter * (2.0 * uDistanceFromCenter)) + vec2(0.5);

	vec3 pos = position;

	pos.y += sin(PI * uv.x) * 0.1;
	pos.z += sin(PI * uv.x) * 0.2;

	pos.y += sin(time) * 0.02;
	vUv.y += sin(time) * 0.02;

	gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}