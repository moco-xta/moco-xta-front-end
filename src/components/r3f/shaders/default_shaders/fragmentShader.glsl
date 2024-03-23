varying vec2 vUv;
float PI = 3.1415926535897932384626433832795;
void main() {
	gl_FragColor = vec4(vUv, 0.0, 1.0);
}

declare module '*.glsl' {
  const file: string;
  export default file;
}