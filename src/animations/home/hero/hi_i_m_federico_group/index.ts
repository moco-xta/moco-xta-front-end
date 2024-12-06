import * as THREE from 'three'

import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hiImFedericoGroupAnimationsConstants.json'

export const hiImFedericoGroupAnimations = {
  position: {
    keyframes: {
      '0%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['0_PERCENT'].X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['0_PERCENT'].Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['0_PERCENT'].Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['0_PERCENT'].EASE,
      },
      '20%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['20_PERCENT'].X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['20_PERCENT'].Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['20_PERCENT'].Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['20_PERCENT'].EASE,
      },
      '40%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['40_PERCENT'].X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['40_PERCENT'].Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['40_PERCENT'].Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['40_PERCENT'].EASE,
      },
      '60%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['60_PERCENT'].X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['60_PERCENT'].Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['60_PERCENT'].Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['60_PERCENT'].EASE,
      },
      '80%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['80_PERCENT'].X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['80_PERCENT'].Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['80_PERCENT'].Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['80_PERCENT'].EASE,
      },
      '100%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['100_PERCENT'].X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['100_PERCENT'].Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['100_PERCENT'].Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.POSITION['100_PERCENT'].EASE,
      },
    },
  },
  rotation: {
    keyframes: {
      '0%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['0_PERCENT'].X,
        ),
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['0_PERCENT'].EASE,
      },
      '20%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['20_PERCENT'].X,
        ),
        y: 0,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['20_PERCENT'].EASE,
      },
      '40%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['40_PERCENT'].X,
        ),
        y: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['40_PERCENT'].Y,
        ),
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['40_PERCENT'].EASE,
      },
      '60%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['80_PERCENT'].X,
        ),
        y: 0,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['60_PERCENT'].EASE,
      },
      '100%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['100_PERCENT'].X,
        ),
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION.ROTATION['100_PERCENT'].EASE,
      },
      easeEach: 'none',
    },
  },
}
