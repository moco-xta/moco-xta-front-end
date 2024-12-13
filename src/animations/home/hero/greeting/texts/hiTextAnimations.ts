import { default as hiTextAnimationsConstants } from '@/constants/animations/home/hero/greeting/texts/hiTextAnimationsConstants.json'

export const hiTextAnimations = {
  position: {
    keyframes: {
      '0%': {
        y: hiTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
        z: hiTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
      },
      '20%': {
        y: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Y,
        z: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Z,
      },
      easeEach: hiTextAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
    },
  },
  rotation: {
    keyframes: {
      '10%': {
        opacity: hiTextAnimationsConstants.ANIMATION['10_PERCENT'].MATERIAL.OPACITY,
      },
      '29%': {
        opacity: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].MATERIAL.OPACITY,
        ease: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].MATERIAL.EASE,
      },
      easeEach: hiTextAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
  },
}
