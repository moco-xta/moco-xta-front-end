uniform float time;
uniform float dotsOpacityFactor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vOpacityOffset;

float PI = 3.1415926538;

void main() {
  float alpha = 1.0 - length(gl_PointCoord.xy - 0.5) * 2.0;
  float finalAlpha = alpha * 0.05 + smoothstep(0.0, 1.0, alpha) * 0.1 + 0.5 * smoothstep(0.9 - fwidth(alpha), 0.9, alpha);
	gl_FragColor = vec4(1.0, 1.0, 1.0, min(1.0, vOpacityOffset + dotsOpacityFactor) * finalAlpha);

	// vec4 color = texture2D(uTexture, vUv);
	// gl_FragColor = color;
}