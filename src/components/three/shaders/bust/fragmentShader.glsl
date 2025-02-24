precision mediump float;

varying vec3 vPos;
varying vec2 vCoordinates;
varying vec2 vUv;

uniform float opacity;
uniform float rgbShift;
uniform sampler2D uTexture;
uniform sampler2D mask;

float PI = 3.1415926538;

vec4 setRgbShift(sampler2D uTexture, vec2 vUv, float rgbShift) {
   float r = texture2D(uTexture, vUv + vec2(rgbShift * 0.05, 0.0)).r;
   float g = texture2D(uTexture, vUv).g;
   float b = texture2D(uTexture, vUv + vec2(rgbShift * 0.05, 0.0)).b;
   return vec4(r, g, b, opacity * texture2D(uTexture, vUv).a);
}

void main() {
	vec4 maskTexture = texture2D(mask, gl_PointCoord);
	vec2 newUv = vec2(vCoordinates.x, vCoordinates.y);
	// vec4 color = setRgbShift(uTexture, newUv, rgbShift);
	vec4 image = texture2D(uTexture, vUv);

	gl_FragColor = image;
	// gl_FragColor = vec4(vCoordinates, 1.0, 1.0);
	// gl_FragColor = vec4(color);
	float alpha = 1.0 - clamp(0.0, 1.0, abs(vPos.z / 900.0));
	gl_FragColor.a *= maskTexture.r * alpha * opacity * 0.5;
}