varying vec2 vUv;
varying vec3 vPos;
varying vec2 vCoordinates;

attribute vec3 aCoordinates;
attribute vec2 aUv;
attribute float aSpeed;
attribute float aOffset;
attribute float aDirection;
attribute float aPress;

uniform float mouse;
uniform float mousePressed;

uniform float time;
uniform float move;

void main() {
	vUv = aUv;
	vec3 pos = position;

	// NOT STABLE
	pos.x += sin(move * aSpeed) * 0.2;
	pos.y += sin(move * aSpeed) * 0.2;
	pos.z = mod(position.z + move * 20.0 * aSpeed + aOffset, 20.0) - 10.0;
	// pos.z = mod(position.z + move * 20.0 * aSpeed + aOffset, 10.0 - time);

	// STABLE
	vec3 stable = position;
	float dist = distance(stable.x, mouse);
	float area = 1.0 - smoothstep(0.0, 1.0, dist);
 
	stable.x += 0.5 * sin( time * aPress) * aDirection * area * mousePressed;
	stable.y += 0.5 * sin( time * aPress) * aDirection * area * mousePressed;
	stable.z += 2.0 * cos(time * aPress) * aDirection * area * mousePressed;

	vec4 mvPosition = modelViewMatrix * vec4(stable, 1.0);
	gl_PointSize = 100.0 * (1.0 / -mvPosition.z);
	// gl_PointSize = 100.0;
	gl_Position = projectionMatrix * mvPosition;
	vCoordinates = aCoordinates.xy;
	vPos = pos;
}