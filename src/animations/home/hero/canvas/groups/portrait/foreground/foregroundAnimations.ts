import * as THREE from 'three'

import { default as foregroundAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/foregroundConstants.json'

export const foregroundAnimations = (timeline: GSAPTimeline, foregroundGroupRef: THREE.Group) => {
  timeline
    // POSITION
    .to(
      foregroundGroupRef.position,
      {
        keyframes: {
          '25%': {
            z: foregroundAnimationsConstants.ANIMATION['25_PERCENT'].POSITION.Z,
          },
          easeEach: foregroundAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
        },
        duration: foregroundAnimationsConstants.DURATION,
      },
      foregroundAnimationsConstants.LABEL,
    )
    // ROTATION
    .to(
      foregroundGroupRef.rotation,
      {
        keyframes: {
          '50%': {
            z: THREE.MathUtils.degToRad(
              foregroundAnimationsConstants.ANIMATION['50_PERCENT'].ROTATION.Z,
            ),
          },
          '75%': {
            z: THREE.MathUtils.degToRad(
              foregroundAnimationsConstants.ANIMATION['75_PERCENT'].ROTATION.Z,
            ),
          },
          easeEach: foregroundAnimationsConstants.ANIMATION.EACH_EASE.ROTATION,
        },
        duration: foregroundAnimationsConstants.DURATION,
      },
      foregroundAnimationsConstants.LABEL,
    )
}
