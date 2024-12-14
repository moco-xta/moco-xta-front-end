import { default as heartComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/heartComponentConstants.json'

export const heartComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: heartComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: heartComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: heartComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: heartComponentConstants.DURATION,
  },
  delay: heartComponentConstants.LABEL,
}
