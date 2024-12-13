import { default as heartComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/heartComponentAnimationsConstants.json'

export const heartComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: heartComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: heartComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: heartComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: heartComponentAnimationsConstants.DURATION,
  },
  delay: heartComponentAnimationsConstants.LABEL,
}
