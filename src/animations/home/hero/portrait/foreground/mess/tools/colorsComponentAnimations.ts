import { default as colorsComponentConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/tools/colorsComponentConstants.json'

export const colorsComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: colorsComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: colorsComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: colorsComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: colorsComponentConstants.DURATION,
  },
  delay: colorsComponentConstants.LABEL,
}
