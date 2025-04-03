attribute vec3 min;
attribute vec3 max;
attribute float opacityOffset;

varying vec2 vUv;
varying vec3 pos;
varying float normalizedXPosition;
varying float normalizedZPosition;
varying float vOpacityOffset;

float PI = 3.1415926538;

void main() {
	vUv = uv;
	pos = position;
	normalizedXPosition = sin((pos.x + max.x) / (max.x - min.x));
	normalizedZPosition = (pos.z + max.z) / (max.z - min.z);

	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	vOpacityOffset = opacityOffset;
}