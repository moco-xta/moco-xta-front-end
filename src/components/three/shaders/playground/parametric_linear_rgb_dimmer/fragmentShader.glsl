uniform sampler2D uTexture;

varying vec3 vPosition;
varying vec2 vUv;

float PI = 3.1415926538;

void main() {
    // Default color from the texture
    vec4 color = texture2D(uTexture, vUv);

    // Parameters for effects
    bool affect_only_visible = false;
    bool apply_rotation = false;
    bool reverse_order = false;
    float rotation_angle = 0.0;
    float height_percent = 50.0;

    // Initialize newUv with the original UV coordinates
    vec2 newUv = vUv;

    if (affect_only_visible) {
        // Placeholder for logic that affects only visible parts
        // Currently does nothing
    } else {
        if (apply_rotation) {
            // Apply rotation to UV coordinates
            float cos_angle = cos(rotation_angle);
            float sin_angle = sin(rotation_angle);
            newUv = vec2(
                vUv.x * cos_angle - vUv.y * sin_angle,
                vUv.x * sin_angle + vUv.y * cos_angle
            );
        }

        // Calculate relative height
        float relative_height = newUv.y;
        float height_threshold = height_percent / 100.0;

        if (reverse_order) {
            relative_height = 1.0 - relative_height;
        }

        // Example: Modify color based on relative height
        if (relative_height > height_threshold) {
            color.rgb *= 0.5; // Darken the color above the threshold
        }

        // Apply the shader only if the fragment is within the specified height range
        if (relative_height > height_threshold) {
            // Reduce the red, green, and blue channels by their respective factors
            color.rgb = vec3(color.r * 1.0, color.g * 0.0, color.b * 0.0);  
            // Adjust the alpha channel
            color.a *= 1.0;
        } else {
            // Keep the original color below the height threshold
            color = texture(uTexture, vUv);
        }
    }

    // Output the final color
    gl_FragColor = color;
}