import { default as imTextAnimationsConstants } from '@/constants/animations/home/hero/greeting/texts/imTextAnimationsConstants.json'

export const imTextAnimations = (imTextLengthRef: number[], index: number) => {
  return {
    position: {
      keyframes: {
        '20%': {
          x: imTextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.X,
          z: imTextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Z + index,
        },
        '40%': {
          x: imTextLengthRef.slice(0, index).reduce((a, b) => a + b, 0),
          z: imTextAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Z,
        },
        easeEach: imTextAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
      },
    },
    material: {
      keyframes: {
        '30%': {
          opacity: imTextAnimationsConstants.ANIMATION['30_PERCENT'].MATERIAL.OPACITY,
        },
        '40%': {
          opacity: imTextAnimationsConstants.ANIMATION['40_PERCENT'].MATERIAL.OPACITY,
          ease: imTextAnimationsConstants.ANIMATION['40_PERCENT'].MATERIAL.EASE,
        },
        easeEach: imTextAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
      },
    },
    duration: imTextAnimationsConstants.DURATION,
    delay: `${imTextAnimationsConstants.LABEL}+=${index * imTextAnimationsConstants.ANIMATION.STAGGER}`,
  }
}
