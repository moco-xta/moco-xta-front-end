import * as THREE from 'three'

import { default as greetingGroupAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingGroupAnimationsConstants.json'

export const greetingGroupAnimations = {
  position: {
    keyframes: {
      '20%': {
        x: greetingGroupAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.X,
        y: greetingGroupAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Y,
        ease: greetingGroupAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.EASE,
      },
      '40%': {
        x: greetingGroupAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.X,
        y: greetingGroupAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Y,
        z: greetingGroupAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Z,
        ease: greetingGroupAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.EASE,
      },
      '60%': {
        x: greetingGroupAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.X,
        y: greetingGroupAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.Y,
        z: greetingGroupAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.Z,
        ease: greetingGroupAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.EASE,
      },
      '80%': {
        y: greetingGroupAnimationsConstants.ANIMATION['80_PERCENT'].POSITION.Y,
        z: greetingGroupAnimationsConstants.ANIMATION['80_PERCENT'].POSITION.Z,
        ease: greetingGroupAnimationsConstants.ANIMATION['80_PERCENT'].POSITION.EASE,
      },
      '100%': {
        z: greetingGroupAnimationsConstants.ANIMATION['100_PERCENT'].POSITION.Z,
        ease: greetingGroupAnimationsConstants.ANIMATION['100_PERCENT'].POSITION.EASE,
      },
    },
  },
  rotation: {
    keyframes: {
      '0%': {
        x: THREE.MathUtils.degToRad(
          greetingGroupAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.X,
        ),
        ease: greetingGroupAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.EASE,
      },
      '20%': {
        x: THREE.MathUtils.degToRad(
          greetingGroupAnimationsConstants.ANIMATION['20_PERCENT'].ROTATION.X,
        ),
        y: 0,
        ease: greetingGroupAnimationsConstants.ANIMATION['20_PERCENT'].ROTATION.EASE,
      },
      '40%': {
        x: THREE.MathUtils.degToRad(
          greetingGroupAnimationsConstants.ANIMATION['40_PERCENT'].ROTATION.X,
        ),
        y: THREE.MathUtils.degToRad(
          greetingGroupAnimationsConstants.ANIMATION['40_PERCENT'].ROTATION.Y,
        ),
        ease: greetingGroupAnimationsConstants.ANIMATION['40_PERCENT'].ROTATION.EASE,
      },
      '60%': {
        x: THREE.MathUtils.degToRad(
          greetingGroupAnimationsConstants.ANIMATION['80_PERCENT'].ROTATION.X,
        ),
        y: 0,
        ease: greetingGroupAnimationsConstants.ANIMATION['60_PERCENT'].ROTATION.EASE,
      },
      '100%': {
        x: THREE.MathUtils.degToRad(
          greetingGroupAnimationsConstants.ANIMATION['100_PERCENT'].ROTATION.X,
        ),
        ease: greetingGroupAnimationsConstants.ANIMATION['100_PERCENT'].ROTATION.EASE,
      },
      easeEach: 'none',
    },
  },
  duration: greetingGroupAnimationsConstants.DURATION,
  delay: greetingGroupAnimationsConstants.LABEL,
}
