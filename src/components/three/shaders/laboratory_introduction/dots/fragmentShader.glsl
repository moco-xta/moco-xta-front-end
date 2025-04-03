uniform float time;
uniform float dotsOpacityFactor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vOpacityOffset;

float PI = 3.1415926538;

void main() {
	gl_FragColor = vec4(1.0, 1.0, 1.0, min(1.0, vOpacityOffset + dotsOpacityFactor));

	// vec4 color = texture2D(uTexture, vUv);
	// gl_FragColor = color;
}