import { default as colorsComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/tools/colorsComponentAnimationsConstants.json'

export const colorsComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: colorsComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: colorsComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: colorsComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: colorsComponentAnimationsConstants.DURATION,
  },
  delay: colorsComponentAnimationsConstants.LABEL,
}
