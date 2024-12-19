import { default as colorsComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/colorsComponentConstants.json'

export const colorsComponentAnimations = (timeline: GSAPTimeline, MeshRef: THREE.Mesh) => {
  timeline
    // MATERIAL
    .to(
      MeshRef.material,
      {
        keyframes: {
          '25%': {
            opacity: colorsComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
          },
          easeEach: colorsComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
        },
        duration: colorsComponentConstants.DURATION,
      },
      colorsComponentConstants.LABEL,
    )
}
