attribute float circularOffset;
attribute float direction;
attribute float offset;
attribute float press;
attribute float opacity;
attribute float radiusOffset;
attribute float speed;

uniform float move;
uniform vec3 mouse;
uniform float mousePressed;
uniform float pointSize;
uniform float time;
uniform float offsetFactor;
uniform float opacityFactor;
uniform float radiusOffsetFactor;

varying vec2 vUv;
varying float vOpacity;

float PI = 3.1415926538;

void main() {
	// vUv = uv;
	// gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	vec3 pos = position;

	// pos.x += sin(move * speed * time);
	pos.x += sin(time + circularOffset) * radiusOffset * radiusOffsetFactor;
	// pos.y += cos(move * speed * time);
	pos.y += cos(time + circularOffset) * radiusOffset * radiusOffsetFactor;
	pos.z = position.z + (move * 5.0 * speed + offset) * offsetFactor;
	// pos.z = mod(position.z + move * 20.0 * speed + offset, 20.0);


	vec3 stable = position;
	float dist = distance(stable.xyz, mouse);
	float area = 1.0 - smoothstep(0.0, 5.0, dist);

	stable.x += 5.0 * sin(0.1 * time * press) * direction * area * mousePressed;
	stable.y += 5.0 * sin(0.1 * time * press) * direction * area * mousePressed;
	stable.z += 5.0 * cos(0.1 * time * press) * direction * area * mousePressed;

	// stable.x += 5.0 * sin(time);
	// stable.y += 5.0 * sin(time);
	// stable.z += 20.0 * cos(time);
	


	vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
	// gl_PointSize = 23.0 * (1.0 / -mvPosition.z);
	gl_PointSize = pointSize;
	gl_Position = projectionMatrix * mvPosition;
	vOpacity = opacityFactor;
}