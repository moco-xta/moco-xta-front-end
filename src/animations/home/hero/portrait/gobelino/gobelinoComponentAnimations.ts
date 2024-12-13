import * as THREE from 'three'

import { default as sunAndMoonAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/sunAndMoonAnimationsConstants.json'

export const gobelinoComponentAnimations = {
  rotation: {
    keyframes: {
      '0%': {
        z: THREE.MathUtils.degToRad(
          sunAndMoonAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Z,
        ),
      },
      '20%': {
        z: THREE.MathUtils.degToRad(
          sunAndMoonAnimationsConstants.ANIMATION['20_PERCENT'].ROTATION.Z,
        ),
      },
      '40%': {
        z: THREE.MathUtils.degToRad(
          sunAndMoonAnimationsConstants.ANIMATION['40_PERCENT'].ROTATION.Z,
        ),
      },
      '60%': {
        z: THREE.MathUtils.degToRad(
          sunAndMoonAnimationsConstants.ANIMATION['60_PERCENT'].ROTATION.Z,
        ),
      },
      easeEach: sunAndMoonAnimationsConstants.ANIMATION.EACH_EASE.ROTATION,
    },
    duration: sunAndMoonAnimationsConstants.DURATION,
  },
  delay: sunAndMoonAnimationsConstants.LABEL,
}
