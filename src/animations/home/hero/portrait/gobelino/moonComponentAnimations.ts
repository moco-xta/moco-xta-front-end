import { default as moonComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/moonComponentConstants.json'

export const moonComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: moonComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '33%': {
        opacity: moonComponentConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: moonComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: moonComponentConstants.DURATION,
  },
  delay: moonComponentConstants.LABEL,
}
