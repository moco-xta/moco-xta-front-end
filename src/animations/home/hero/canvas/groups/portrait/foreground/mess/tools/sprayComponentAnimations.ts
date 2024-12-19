import { default as sprayComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/sprayComponentConstants.json'

export const sprayComponentAnimations = (timeline: GSAPTimeline, MeshRef: THREE.Mesh) => {
  timeline
    // MATERIAL
    .to(
      MeshRef.material,
      {
        keyframes: {
          '25%': {
            opacity: sprayComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
          },
          easeEach: sprayComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
        },
        duration: sprayComponentConstants.DURATION,
      },
      sprayComponentConstants.LABEL,
    )
}
