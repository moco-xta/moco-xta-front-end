import { default as ganeshComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/ganeshComponentAnimationsConstants.json'

export const ganeshComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: ganeshComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: ganeshComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: ganeshComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: ganeshComponentAnimationsConstants.DURATION,
  },
  delay: ganeshComponentAnimationsConstants.LABEL,
}
