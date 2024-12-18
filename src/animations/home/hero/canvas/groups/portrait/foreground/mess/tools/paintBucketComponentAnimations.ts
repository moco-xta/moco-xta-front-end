import { default as paintBucketComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/paintBucketComponentConstants.json'

export const paintBucketComponentAnimations = (timeline: GSAPTimeline, MeshRef: THREE.Mesh) => {
  timeline
    // MATERIAL
    .to(
      MeshRef.material,
      {
        keyframes: {
          '25%': {
            opacity: paintBucketComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
          },
          easeEach: paintBucketComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
        },
        duration: paintBucketComponentConstants.DURATION,
      },
      paintBucketComponentConstants.LABEL,
    )
}
