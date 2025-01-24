uniform vec4 uResolution;
uniform sampler2D uTexture1;
varying vec2 vUv;

void main()	{
	// vec2 newUV = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
	// vec4 color = texture2D(uTexture1, newUV);
	vec4 color = texture2D(uTexture1, vUv);
	gl_FragColor = vec4(color[0], color[1], color[2], 0.3);
}