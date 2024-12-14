import { default as ganeshComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/ganeshComponentConstants.json'

export const ganeshComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: ganeshComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: ganeshComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: ganeshComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: ganeshComponentConstants.DURATION,
  },
  delay: ganeshComponentConstants.LABEL,
}
