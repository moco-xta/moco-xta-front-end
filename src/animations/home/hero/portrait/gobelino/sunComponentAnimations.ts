import { default as sunComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/sunComponentAnimationsConstants.json'

export const sunComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: sunComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '33%': {
        opacity: sunComponentAnimationsConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
      },
      '66%': {
        opacity: sunComponentAnimationsConstants.ANIMATION['66_PERCENT'].MATERIAL.OPACITY,
      },
      '100%': {
        opacity: sunComponentAnimationsConstants.ANIMATION['100_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: sunComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: sunComponentAnimationsConstants.DURATION,
  },
  delay: sunComponentAnimationsConstants.LABEL,
}
