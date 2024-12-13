import { default as profilPictureAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/profilPictureAnimationsConstants.json'

export const profilePictureAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: profilPictureAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: profilPictureAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: profilPictureAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: profilPictureAnimationsConstants.DURATION,
  },
  delay: profilPictureAnimationsConstants.LABEL,
}
