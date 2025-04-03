attribute float min;
attribute float max;
attribute float opacityOffset;

varying vec2 vUv;
varying vec3 pos;
varying float normalizedZPosition;
varying float vOpacityOffset;

float PI = 3.1415926538;

void main() {
	vUv = uv;
	pos = position;
	normalizedZPosition = (pos.z + max) / ((max - min) * 2.0);

	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	vOpacityOffset = opacityOffset;
}