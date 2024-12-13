import { default as sprayComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/tools/sprayComponentAnimationsConstants.json'

export const sprayComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: sprayComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: sprayComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: sprayComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: sprayComponentAnimationsConstants.DURATION,
  },
  delay: sprayComponentAnimationsConstants.LABEL,
}
