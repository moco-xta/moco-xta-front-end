import { default as cloudComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/gobelino/cloudComponentConstants.json'

export const cloudComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: cloudComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: cloudComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: cloudComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: cloudComponentConstants.DURATION,
  },
  delay: cloudComponentConstants.LABEL,
}
