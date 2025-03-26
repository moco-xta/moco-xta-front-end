uniform float time;
uniform sampler2D uTexture;

varying vec2 vUv;

float PI = 3.1415926538;

void main() {
	vec4 color = texture2D(uTexture, vUv);
	gl_FragColor = color;
}