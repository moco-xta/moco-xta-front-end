import { default as hillTopRightComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/gobelino/hillTopRightComponentConstants.json'

export const hillTopRightComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: hillTopRightComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: hillTopRightComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: hillTopRightComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: hillTopRightComponentConstants.DURATION,
  },
  delay: hillTopRightComponentConstants.LABEL,
}
