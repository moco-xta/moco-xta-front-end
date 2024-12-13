import { default as colorPickerComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/tools/colorPickerComponentAnimationsConstants.json'

export const colorPickerComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: colorPickerComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: colorPickerComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: colorPickerComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: colorPickerComponentAnimationsConstants.DURATION,
  },
  delay: colorPickerComponentAnimationsConstants.LABEL,
}
