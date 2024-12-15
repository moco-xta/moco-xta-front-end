import * as THREE from 'three'

import { default as greetingGroupConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/greetingGroupConstants.json'

export const greetingGroupAnimations = {
  position: {
    keyframes: {
      '20%': {
        x: greetingGroupConstants.ANIMATION['20_PERCENT'].POSITION.X,
        y: greetingGroupConstants.ANIMATION['20_PERCENT'].POSITION.Y,
        ease: greetingGroupConstants.ANIMATION['20_PERCENT'].POSITION.EASE,
      },
      '40%': {
        x: greetingGroupConstants.ANIMATION['40_PERCENT'].POSITION.X,
        y: greetingGroupConstants.ANIMATION['40_PERCENT'].POSITION.Y,
        z: greetingGroupConstants.ANIMATION['40_PERCENT'].POSITION.Z,
        ease: greetingGroupConstants.ANIMATION['40_PERCENT'].POSITION.EASE,
      },
      '60%': {
        x: greetingGroupConstants.ANIMATION['60_PERCENT'].POSITION.X,
        y: greetingGroupConstants.ANIMATION['60_PERCENT'].POSITION.Y,
        z: greetingGroupConstants.ANIMATION['60_PERCENT'].POSITION.Z,
        ease: greetingGroupConstants.ANIMATION['60_PERCENT'].POSITION.EASE,
      },
      '80%': {
        y: greetingGroupConstants.ANIMATION['80_PERCENT'].POSITION.Y,
        z: greetingGroupConstants.ANIMATION['80_PERCENT'].POSITION.Z,
        ease: greetingGroupConstants.ANIMATION['80_PERCENT'].POSITION.EASE,
      },
      '100%': {
        z: greetingGroupConstants.ANIMATION['100_PERCENT'].POSITION.Z,
        ease: greetingGroupConstants.ANIMATION['100_PERCENT'].POSITION.EASE,
      },
    },
  },
  rotation: {
    keyframes: {
      '0%': {
        x: THREE.MathUtils.degToRad(greetingGroupConstants.ANIMATION['0_PERCENT'].ROTATION.X),
        ease: greetingGroupConstants.ANIMATION['0_PERCENT'].ROTATION.EASE,
      },
      '20%': {
        x: THREE.MathUtils.degToRad(greetingGroupConstants.ANIMATION['20_PERCENT'].ROTATION.X),
        y: 0,
        ease: greetingGroupConstants.ANIMATION['20_PERCENT'].ROTATION.EASE,
      },
      '40%': {
        x: THREE.MathUtils.degToRad(greetingGroupConstants.ANIMATION['40_PERCENT'].ROTATION.X),
        y: THREE.MathUtils.degToRad(greetingGroupConstants.ANIMATION['40_PERCENT'].ROTATION.Y),
        ease: greetingGroupConstants.ANIMATION['40_PERCENT'].ROTATION.EASE,
      },
      '60%': {
        x: THREE.MathUtils.degToRad(greetingGroupConstants.ANIMATION['80_PERCENT'].ROTATION.X),
        y: 0,
        ease: greetingGroupConstants.ANIMATION['60_PERCENT'].ROTATION.EASE,
      },
      '100%': {
        x: THREE.MathUtils.degToRad(greetingGroupConstants.ANIMATION['100_PERCENT'].ROTATION.X),
        ease: greetingGroupConstants.ANIMATION['100_PERCENT'].ROTATION.EASE,
      },
      easeEach: 'none',
    },
  },
  duration: greetingGroupConstants.DURATION,
  delay: greetingGroupConstants.LABEL,
}
