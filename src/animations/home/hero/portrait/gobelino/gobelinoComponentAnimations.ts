import * as THREE from 'three'

import { default as sunAndMoonConstants } from '@/constants/animations/home/hero/portrait/gobelino/sunAndMoonConstants.json'

export const gobelinoComponentAnimations = {
  rotation: {
    keyframes: {
      '0%': {
        z: THREE.MathUtils.degToRad(sunAndMoonConstants.ANIMATION['0_PERCENT'].ROTATION.Z),
      },
      '20%': {
        z: THREE.MathUtils.degToRad(sunAndMoonConstants.ANIMATION['20_PERCENT'].ROTATION.Z),
      },
      '40%': {
        z: THREE.MathUtils.degToRad(sunAndMoonConstants.ANIMATION['40_PERCENT'].ROTATION.Z),
      },
      '60%': {
        z: THREE.MathUtils.degToRad(sunAndMoonConstants.ANIMATION['60_PERCENT'].ROTATION.Z),
      },
      easeEach: sunAndMoonConstants.ANIMATION.EACH_EASE.ROTATION,
    },
    duration: sunAndMoonConstants.DURATION,
  },
  delay: sunAndMoonConstants.LABEL,
}
