import { default as developerGroupConstants } from '@/constants/animations/home/hero/canvas/groups/developer/developerGroupConstants.json'

export const developerGroupAnimations = (developerGroup: THREE.Group) => {
  return {
    visibility: {
      keyframes: {
        '0%': {
          onComplete: () => {
            developerGroup.visible = developerGroupConstants.ANIMATION['0_PERCENT'].VISIBILITY
          },
        },
        '100%': {
          onComplete: () => {
            developerGroup.visible = developerGroupConstants.ANIMATION['100_PERCENT'].VISIBILITY
          },
        },
      },
      duration: developerGroupConstants.DURATION,
    },
    delay: developerGroupConstants.LABEL,
  }
}
