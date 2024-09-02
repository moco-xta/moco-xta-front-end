varying vec2 vUv;
varying vec3 vNormal;
float PI = 3.1415926538;
void main() {
	gl_FragColor = vec4(vNormal, 1.0);
}