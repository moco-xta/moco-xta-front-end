varying vec2 vUv;
varying vec3 vPos;
varying vec2 vCoordinates;
uniform float opacity;
uniform sampler2D uTexture;
uniform sampler2D mask;

float NUMBER = 512.0;

vec4 rgbShift(sampler2D uTexture, vec2 vUv, float opacity) {
   float r = texture2D(uTexture, vUv + vec2(1.0 - opacity, 0.0)).r;
   float g = texture2D(uTexture, vUv).g;
   float b = texture2D(uTexture, vUv + vec2(1.0 - opacity, 0.0)).b;
   return vec4(r, g, b, opacity * texture2D(uTexture, vUv).a);
 }

void main() {
	vec4 maskTexture = texture2D(mask, gl_PointCoord);
	vec2 newUv = vec2(vCoordinates.x / NUMBER, vCoordinates.y / NUMBER);
	vec4 color = rgbShift(uTexture, newUv, opacity);

	gl_FragColor = vec4(color);
	float alpha = 1.0 - clamp(0.0, 1.0, abs(vPos.z / 900.0));
	gl_FragColor.a *= maskTexture.r * alpha * opacity;
} 