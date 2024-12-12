import { default as imtextAnimationsConstants } from '@/constants/animations/home/hero/greeting/caseIssue.json'

export const imTextPositionAnimation = (imTextLengthRef: number[], index: number) => {
  return {
    '20%': {
      x: imtextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.X,
      z: imtextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Z + index,
    },
    '40%': {
      x: imTextLengthRef.slice(0, index).reduce((a, b) => a + b, 0),
      z: imtextAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Z,
    },
    easeEach: imtextAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
  }
}

export const imTextMaterialAnimation = {
  keyframes: {
    '30%': {
      opacity: imtextAnimationsConstants.ANIMATION['30_PERCENT'].MATERIAL.OPACITY,
    },
    '40%': {
      opacity: imtextAnimationsConstants.ANIMATION['40_PERCENT'].MATERIAL.OPACITY,
      ease: imtextAnimationsConstants.ANIMATION['40_PERCENT'].MATERIAL.EASE,
    },
    easeEach: imtextAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
  },
}
