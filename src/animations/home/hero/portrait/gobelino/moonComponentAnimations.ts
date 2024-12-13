import { default as moonComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/moonComponentAnimationsConstants.json'

export const moonComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: moonComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '33%': {
        opacity: moonComponentAnimationsConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: moonComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: moonComponentAnimationsConstants.DURATION,
  },
  delay: moonComponentAnimationsConstants.LABEL,
}
