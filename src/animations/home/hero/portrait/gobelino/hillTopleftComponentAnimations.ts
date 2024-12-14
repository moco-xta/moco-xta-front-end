import { default as hillTopLeftComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/hillTopLeftComponentConstants.json'

export const hillTopleftComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: hillTopLeftComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: hillTopLeftComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: hillTopLeftComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: hillTopLeftComponentConstants.DURATION,
  },
  delay: hillTopLeftComponentConstants.LABEL,
}
