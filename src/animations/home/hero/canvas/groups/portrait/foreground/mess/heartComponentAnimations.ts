import { default as heartComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/heartComponentConstants.json'

export const heartComponentAnimations = (
  timeline: GSAPTimeline,
  heartComponentMeshRef: THREE.Mesh,
) => {
  timeline
    // MATERIAL
    .to(
      heartComponentMeshRef.material,
      {
        keyframes: {
          '25%': {
            opacity: heartComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
          },
          easeEach: heartComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
        },
        duration: heartComponentConstants.DURATION,
      },
      heartComponentConstants.LABEL,
    )
}
