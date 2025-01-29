varying vec2 vCoordinates;

uniform sampler2D uTexture;

float PI = 3.1415926538;

void main() {
	vec2 newUv = vec2(vCoordinates.x, vCoordinates.y);
	vec4 image = texture2D(uTexture, newUv);
	gl_FragColor = image;
}