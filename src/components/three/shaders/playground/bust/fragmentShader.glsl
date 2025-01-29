varying vec3 vPos;

varying vec2 vCoordinates;

uniform sampler2D uTexture;
uniform sampler2D mask;

float PI = 3.1415926538;

void main() {
	vec4 maskTexture = texture2D(mask, gl_PointCoord);
	vec2 newUv = vec2(vCoordinates.x, vCoordinates.y);
	vec4 image = texture2D(uTexture, newUv);
	gl_FragColor = image;
	float alpha = 1.0 - clamp(0.0, 1.0, abs(vPos.z / 7.0));
	gl_FragColor.a *= maskTexture.r * alpha;
}