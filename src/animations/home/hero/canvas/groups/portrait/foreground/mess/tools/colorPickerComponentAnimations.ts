import { default as colorPickerComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/colorPickerComponentConstants.json'

export const colorPickerComponentAnimations = (timeline: GSAPTimeline, MeshRef: THREE.Mesh) => {
  timeline
    // MATERIAL
    .to(
      MeshRef.material,
      {
        keyframes: {
          '25%': {
            opacity: colorPickerComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
          },
          easeEach: colorPickerComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
        },
        duration: colorPickerComponentConstants.DURATION,
      },
      colorPickerComponentConstants.LABEL,
    )
}
