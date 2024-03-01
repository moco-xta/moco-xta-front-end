uniform sampler2D uTexture;
uniform float hasTexture;
uniform float uShift;
uniform vec3 uColor;
uniform float uOpacity;
uniform float uScale;
varying vec2 vUv;
void main() {
	float angle = 1.55;
	vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - 0.05 * uShift) + vec2(0.5, 0.5);
	vec2 offset = uShift / 100.0 * vec2(cos(angle), sin(angle));
	vec4 cr = texture2D(uTexture, p + offset);
	vec4 cga = texture2D(uTexture, p);
	vec4 cb = texture2D(uTexture, p - offset);
	/* if (hasTexture == 1.0)  */gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
	/* else gl_FragColor = vec4(uColor, uOpacity); */
}