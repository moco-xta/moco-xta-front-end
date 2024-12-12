uniform float uAlpha;
uniform sampler2D uTexture;
uniform vec2 uMouse;
varying vec2 vUv;

float PI = 3.1415926538;

vec4 rgbShift(sampler2D uTexture, vec2 vUv, vec2 uMouse, float uAlpha) {
   float r = texture2D(uTexture, vUv + vec2(uMouse.x * 0.025, 0.0)).r;
   float g = texture2D(uTexture, vUv).g;
   float b = texture2D(uTexture, vUv + vec2(uMouse.y * 0.035, 0.0)).b;
   return vec4(r, g, b, uAlpha * texture2D(uTexture, vUv).a);
 }

void main() {
	vec4 color = rgbShift(uTexture,vUv,uMouse, uAlpha);
	gl_FragColor = vec4(color);
}