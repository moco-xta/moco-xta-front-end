import { default as christusComponentConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/christusComponentConstants.json'

export const christusComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: christusComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: christusComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: christusComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: christusComponentConstants.DURATION,
  },
  delay: christusComponentConstants.LABEL,
}
