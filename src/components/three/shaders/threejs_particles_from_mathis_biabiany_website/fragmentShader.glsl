varying vec2 vUv;
varying vec3 vPos;
varying vec2 vCoordinates;
uniform sampler2D t1;
uniform sampler2D t2;
uniform sampler2D mask;

float NUMBER = 512.0;

void main() {
	vec4 maskTexture = texture2D(mask, gl_PointCoord);
	vec2 myUV = vec2(vCoordinates.x / NUMBER, vCoordinates.y / NUMBER);
	vec4 image = texture2D(t2, myUV);

	gl_FragColor = image;
	// gl_FragColor = maskTexture;
	float alpha = 1.0 - clamp(0.0, 1.0, abs(vPos.z / 900.0));
	gl_FragColor.a *= maskTexture.r * alpha;
	/* float alpha = 1.0 - clamp(0.0, 1.0, abs(vPos.z / 900.0));
	gl_FragColor.a *= maskTexture.r * alpha; */
} 