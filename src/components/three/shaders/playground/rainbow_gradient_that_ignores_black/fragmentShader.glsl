uniform float time;
uniform sampler2D uTexture;

varying vec2 vUv;

float PI = 3.1415926538;

void main() {
	vec4 color = texture2D(uTexture, vUv);

	float strength = 0.3;
	float speed = 0.5;
	float angle = 0.0;

	float hue = vUv.x * cos(radians(angle)) - vUv.y * sin(radians(angle));
	hue = fract(hue + fract(time  * speed));
	float x = 1.0 - abs(mod(hue / (1.0 / 6.0), 2.0) - 1.0);
	vec3 rainbow;
	if(hue < 1.0 / 6.0){
			rainbow = vec3(1.0, x, 0.0);
	} else if (hue < 1.0 / 3.0) {
			rainbow = vec3(x, 1.0, 0);
	} else if (hue < 0.5) {
			rainbow = vec3(0, 1.0, x);
	} else if (hue < 2.0 / 3.0) {
			rainbow = vec3(0.0, x, 1.0);
	} else if (hue < 5.0 / 6.0) {
			rainbow = vec3(x, 0.0, 1.0);
	} else {
			rainbow = vec3(1.0, 0.0, x);
	}

	color = mix(color, color * vec4(rainbow, color.a), strength);

	gl_FragColor = color;
}

// https://godotshaders.com/shader/rainbow-gradient-that-ignores-black/