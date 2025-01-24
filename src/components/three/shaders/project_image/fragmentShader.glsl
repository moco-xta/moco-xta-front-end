uniform vec4 uResolution;
uniform sampler2D uTexture1;
varying vec2 vUv;

void main()	{
	vec2 newUV = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
	gl_FragColor = texture2D(uTexture1, newUV);
	gl_FragColor.a = 0.3;
}