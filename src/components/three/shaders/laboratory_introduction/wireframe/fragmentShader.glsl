uniform float time;
uniform float wireframeOpacityFactor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float normalizedZPosition;

float PI = 3.1415926538;

void main() {
	gl_FragColor = vec4(1.0, 1.0, 1.0, max(0.0, 1.0 - normalizedZPosition - wireframeOpacityFactor));
	// gl_FragColor = vec4(vUv, 1.0, 1.0);

	// vec4 color = texture2D(uTexture, vUv);
	// gl_FragColor = color;
}