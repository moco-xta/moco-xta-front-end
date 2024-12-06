import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hiImFedericoGroupAnimationsConstants.json'

export const hiTextAnimations = {
  position: {
    keyframes: {
      '0%': {
        y: hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.POSITION['0_PERCENT'].Y,
        z: hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.POSITION['0_PERCENT'].Z,
      },
      '20%': {
        y: hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.POSITION['20_PERCENT'].Y,
        z: hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.POSITION['20_PERCENT'].Z,
      },
      easeEach: hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.POSITION.EACH_EASE,
    },
  },
  rotation: {
    keyframes: {
      '10%': {
        opacity:
          hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.MATERIAL['10_PERCENT']
            .OPACITY,
      },
      '29%': {
        opacity:
          hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.MATERIAL['20_PERCENT']
            .OPACITY,
        ease: hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.MATERIAL['20_PERCENT']
          .EASE,
      },
      easeEach: hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.MATERIAL.EACH_EASE,
    },
  },
}
