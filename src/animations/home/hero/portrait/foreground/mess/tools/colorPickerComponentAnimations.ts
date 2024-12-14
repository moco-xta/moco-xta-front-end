import { default as colorPickerComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/colorPickerComponentConstants.json'

export const colorPickerComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: colorPickerComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: colorPickerComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: colorPickerComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: colorPickerComponentConstants.DURATION,
  },
  delay: colorPickerComponentConstants.LABEL,
}
