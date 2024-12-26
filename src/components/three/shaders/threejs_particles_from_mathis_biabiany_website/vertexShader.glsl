varying vec2 vUv;
varying vec3 vPos;
varying vec2 vCoordinates;
attribute vec3 aCoordinates;
attribute float aSpeed;
attribute float aOffset;
attribute float aDirection;
attribute float aPress;

uniform float time;
uniform float move;
uniform float mouse;
uniform float mousePressed;

float PI = 3.1415926538;
void main() {
	vUv = uv;
	vec3 pos = position;

	// NOT STABLE
	pos.x += sin(move * aSpeed) * 0.2;
	pos.y += sin(move * aSpeed) * 0.2;
	pos.z = mod(position.z + move * 2.0 * aSpeed + aOffset, 2.0) - 1.0;

	vec3 stable = position;
	float dist = distance(stable.x, mouse);
	float area = 1.0 - smoothstep(0.0, 300.0, dist);

	stable.x += 50.0 * sin(0.1 * time * aPress) * aDirection * area * mousePressed;
	stable.y += 50.0 * sin(0.1 * time * aPress) * aDirection * area * mousePressed;
	stable.z += 200.0 * cos(0.1 * time * aPress) * aDirection * area * mousePressed;

	// STABLE
	vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
	gl_PointSize = 120.0 * (1.0 / -mvPosition.z);
	gl_Position = projectionMatrix * mvPosition;
	vCoordinates = aCoordinates.xy;
	vPos = pos;
}