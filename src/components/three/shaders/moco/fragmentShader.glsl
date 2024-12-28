uniform sampler2D pointTexture;
varying vec3 vColor;

void main() {
	gl_FragColor = vec4(vColor, 1.0);
	if (texture2D(pointTexture,gl_PointCoord).g < 0.7) discard;
	gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
}