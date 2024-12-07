import * as THREE from 'three'

import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hi_i_m_federico_group/hiImFedericoGroupAnimationsConstants.json'

export const hiImFedericoGroupAnimations = {
  position: {
    keyframes: {
      '20%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Y,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.EASE,
      },
      '40%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.EASE,
      },
      '60%': {
        x: hiImFedericoGroupAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.X,
        y: hiImFedericoGroupAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.EASE,
      },
      '80%': {
        y: hiImFedericoGroupAnimationsConstants.ANIMATION['80_PERCENT'].POSITION.Y,
        z: hiImFedericoGroupAnimationsConstants.ANIMATION['80_PERCENT'].POSITION.Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['80_PERCENT'].POSITION.EASE,
      },
      '100%': {
        z: hiImFedericoGroupAnimationsConstants.ANIMATION['100_PERCENT'].POSITION.Z,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['100_PERCENT'].POSITION.EASE,
      },
    },
  },
  rotation: {
    keyframes: {
      '0%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.X,
        ),
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.EASE,
      },
      '20%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION['20_PERCENT'].ROTATION.X,
        ),
        y: 0,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['20_PERCENT'].ROTATION.EASE,
      },
      '40%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION['40_PERCENT'].ROTATION.X,
        ),
        y: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION['40_PERCENT'].ROTATION.Y,
        ),
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['40_PERCENT'].ROTATION.EASE,
      },
      '60%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION['80_PERCENT'].ROTATION.X,
        ),
        y: 0,
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['60_PERCENT'].ROTATION.EASE,
      },
      '100%': {
        x: THREE.MathUtils.degToRad(
          hiImFedericoGroupAnimationsConstants.ANIMATION['100_PERCENT'].ROTATION.X,
        ),
        ease: hiImFedericoGroupAnimationsConstants.ANIMATION['100_PERCENT'].ROTATION.EASE,
      },
      easeEach: 'none',
    },
  },
}
