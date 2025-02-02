uniform sampler2D uTexture;

varying vec3 vPosition;
varying vec2 vUv;

float PI = 3.1415926538;

void main() {
    vec4 color = texture2D(uTexture, vUv);

    // Parameters for effects
    bool affect_only_visible = false;
    bool apply_rotation = false;
    bool reverse_order = false;
    float rotation_angle = 0.0;
    float height_percent = 50.0;

    vec2 newUv = vUv;

    if (affect_only_visible) {
    } else {
        if (apply_rotation) {
            float cos_angle = cos(rotation_angle);
            float sin_angle = sin(rotation_angle);
            newUv = vec2(
                vUv.x * cos_angle - vUv.y * sin_angle,
                vUv.x * sin_angle + vUv.y * cos_angle
            );
        }

        float relative_height = newUv.y;
        float height_threshold = height_percent / 100.0;

        if (reverse_order) {
            relative_height = 1.0 - relative_height;
        }

        if (relative_height > height_threshold) {
            color.rgb *= 0.5;
            color.rgb = vec3(color.r * 1.0, color.g * 0.0, color.b * 0.0);  
            color.a *= 1.0;
        } else {
            color = texture(uTexture, vUv);
        }
    }

    gl_FragColor = color;
}

// https://godotshaders.com/shader/parametric-linear-rgb-dimmer/