import * as THREE from 'three'

import { default as foregroundAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/foregroundConstants.json'

export const foregroundAnimations = () => {
  return {
    position: {
      keyframes: {
        '0%': {
          z: foregroundAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        },
        '25%': {
          z: foregroundAnimationsConstants.ANIMATION['25_PERCENT'].POSITION.Z,
        },
        easeEach: foregroundAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
      },
    },
    rotation: {
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
    },
    duration: foregroundAnimationsConstants.DURATION,
    delay: foregroundAnimationsConstants.LABEL,
  }
}
