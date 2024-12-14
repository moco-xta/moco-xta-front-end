import { default as sunComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/sunComponentConstants.json'

export const sunComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: sunComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '33%': {
        opacity: sunComponentConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
      },
      '66%': {
        opacity: sunComponentConstants.ANIMATION['66_PERCENT'].MATERIAL.OPACITY,
      },
      '100%': {
        opacity: sunComponentConstants.ANIMATION['100_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: sunComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: sunComponentConstants.DURATION,
  },
  delay: sunComponentConstants.LABEL,
}
