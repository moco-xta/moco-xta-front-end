import { default as profilPictureConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/profilPictureConstants.json'

export const profilePictureAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: profilPictureConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: profilPictureConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: profilPictureConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: profilPictureConstants.DURATION,
  },
  delay: profilPictureConstants.LABEL,
}
