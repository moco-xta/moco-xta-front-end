import { default as birdComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/birdComponentConstants.json'

export const birdComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: birdComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: birdComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: birdComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: birdComponentConstants.DURATION,
  },
  delay: birdComponentConstants.LABEL,
}
