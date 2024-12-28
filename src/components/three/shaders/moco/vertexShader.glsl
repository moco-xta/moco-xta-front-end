attribute float size;
attribute vec3 color;

varying vec3 vColor;

void main() {
	vColor = color;
	// vColor = vec4(1.0, 0.0, 0.0, 1.0);
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
	gl_PointSize = size;
	// gl_PointSize = 10.0;
	gl_Position = projectionMatrix * mvPosition;
}