uniform float time;
uniform float opacityFactor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vOpacity;

float PI = 3.1415926538;

void main() {
	gl_FragColor = vec4(0.0, 0.0, 0.0, vOpacity * opacityFactor);

	// vec4 color = texture2D(uTexture, vUv);
	// gl_FragColor = color;
}