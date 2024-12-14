import { default as sprayComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/sprayComponentConstants.json'

export const sprayComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: sprayComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: sprayComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: sprayComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: sprayComponentConstants.DURATION,
  },
  delay: sprayComponentConstants.LABEL,
}
