uniform float time;
uniform float wireframeOpacityFactor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float normalizedXPosition;
varying float normalizedYPosition;

varying float normalizedZPosition;
varying float vOpacityOffset;

float PI = 3.1415926538;

void main() {
	gl_FragColor = vec4(1.0, 1.0, 1.0, max(0.0, 1.0 - normalizedZPosition * (1.0 - normalizedYPosition) * normalizedXPosition - wireframeOpacityFactor)  * 0.1);
}