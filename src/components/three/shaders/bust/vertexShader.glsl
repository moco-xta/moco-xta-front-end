varying vec2 vUv;
varying vec3 vPos;
varying vec2 vCoordinates;

attribute vec3 aCoordinates;
attribute float aSpeed;
attribute float aOffset;
attribute float aDirection;
attribute float aPress;
attribute float aDelay;

uniform float time;
uniform float pointSize;
uniform float move;
uniform float anthropy;

float scale = 2.5;
float yOffset = 0.5;

float PI = 3.1415926538;

void main() {
	vUv = uv;
	vec3 pos = position;

	// NOT STABLE
	pos.x += sin(move * aSpeed) * 1.5;
	pos.y += sin(move * aSpeed) * 1.5;
	pos.z = mod(position.z + move * 20.0 * aSpeed + aOffset, 20.0) - 10.0;

	// STABLE
	vec3 stable = position;
	// stable.x -= 0.5 * sin( time * aPress) * aDirection * anthropy
	// stable.x += 0.5 * sin( time * aPress) * aDirection * anthropy;
	stable.x *= (1.0 + anthropy * (sin(time * aPress) + 1.0));
	// stable.y += 0.25 * sin( time * aPress) * aDirection * anthropy;
	stable.y *= (1.0 + anthropy * (cos(time * aPress) + 1.0));
	stable.z += 0.4 * cos(time * aPress) * aDirection * anthropy;

	stable.x *= scale;
	stable.y = (stable.y *= scale) + yOffset + anthropy * 0.25;
	stable.z *= scale;

	vec4 mvPosition = modelViewMatrix * vec4(stable, 1.0);
	gl_PointSize = pointSize; // * (1.0 / -mvPosition.z);
	gl_Position = projectionMatrix * mvPosition;
	vCoordinates = aCoordinates.xy;
	vPos = pos;
}