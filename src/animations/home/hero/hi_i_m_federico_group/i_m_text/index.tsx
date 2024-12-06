import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hiImFedericoGroupAnimationsConstants.json'

export const imTextPositionAnimation = (imTextLengthRef: number[], index: number) => {
  return {
    '20%': {
      x: hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.POSITION['20_PERCENT'].X,
      z:
        hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.POSITION['20_PERCENT'].Z *
        index,
    },
    '40%': {
      x: imTextLengthRef.slice(0, index).reduce((a, b) => a + b, 0),
      z: hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.POSITION['40_PERCENT'].X,
    },
    easeEach: hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.MATERIAL.EACH_EASE,
  }
}

export const imTextMaterialAnimation = {
  keyframes: {
    '30%': {
      opacity:
        hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.MATERIAL['30_PERCENT'].OPACITY,
    },
    '40%': {
      opacity:
        hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.MATERIAL['40_PERCENT'].OPACITY,
      ease: hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.MATERIAL['40_PERCENT']
        .EASE,
    },
    easeEach: hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.MATERIAL.EACH_EASE,
  },
}
