uniform float time;
uniform sampler2D uTexture;
uniform float uDistanceFromCenter;

varying vec2 vUv;

float PI = 3.1415926538;

void main() {
	vec4 color = texture2D(uTexture, vUv);
	float bw = (color.r + color.g + color.b) / 3.0;
	vec4 another = vec4(bw, bw, bw, 1.0);
	gl_FragColor = mix(color, another, 1.0 -uDistanceFromCenter);
	gl_FragColor.a = clamp(uDistanceFromCenter, 0.2, 1.0);
}