import { default as christusComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/christusComponentAnimationsConstants.json'

export const christusComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: christusComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: christusComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: christusComponentAnimationsConstants.DURATION,
  },
  delay: christusComponentAnimationsConstants.LABEL,
}
