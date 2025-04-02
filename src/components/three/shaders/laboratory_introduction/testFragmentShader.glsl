uniform float time;
uniform sampler2D uTexture;

varying vec2 vUv;

float PI = 3.1415926538;

void main() {
  vec3 color = vec3(0.2);
  float alpha = 1.0 - length(gl_PointCoord.xy - 0.5) * 2.0;
  float finalAlpha = alpha * 0.05 + smoothstep(0.0, 1.0, alpha) * 0.1 + 0.5 * smoothstep(0.9 - fwidth(alpha), 0.9, alpha);
	// gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
	gl_FragColor = vec4(vec3(color), finalAlpha);
}