import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hiImFedericoGroupAnimationsConstants.json'
import { getRandomInt } from '@/helpers/mathHelpers'

export const federicoTextPositionAnimation = (
  federicoTextGroupRef: THREE.Group,
  federicoTextLengthRef: number[],
  index: number,
) => {
  return {
    '40%': {
      x: getRandomInt({
        min: hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.POSITION[
          '40_PERCENT'
        ].X.MIN,
        max: hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.POSITION[
          '40_PERCENT'
        ].X.MAX,
        decimal:
          hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.POSITION['40_PERCENT'].X
            .DECIMAL,
      }),
      z: getRandomInt({
        min: hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.POSITION[
          '40_PERCENT'
        ].Z.MIN,
        max: hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.POSITION[
          '40_PERCENT'
        ].Z.MAX,
        decimal:
          hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.POSITION['40_PERCENT'].Z
            .DECIMAL,
      }),
    },
    '60%': {
      x:
        federicoTextGroupRef.position.x +
        federicoTextLengthRef.slice(0, index).reduce((a, b) => a + b, 0),
      z: hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.POSITION['60_PERCENT'].Z,
    },
    easeEach: hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.MATERIAL.EACH_EASE,
  }
}

export const federicoTextMaterialAnimation = {
  keyframes: {
    '50%': {
      opacity:
        hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.MATERIAL['50_PERCENT']
          .OPACITY,
    },
    '60%': {
      opacity:
        hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.MATERIAL['60_PERCENT']
          .OPACITY,
      ease: hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.MATERIAL['60_PERCENT']
        .EASE,
    },
    easeEach: hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.MATERIAL.EACH_EASE,
  },
}
