import { default as developerTextsGroupConstants } from '@/constants/animations/home/hero/canvas/groups/developer/developerTextsGroupConstants.json'
export const developerTextsGroupAnimations = (developerTextsGroup: THREE.Group) => {
  return {
    visibility: {
      keyframes: {
        '0%': {
          onComplete: () => {
            developerTextsGroup.visible =
              developerTextsGroupConstants.ANIMATION['0_PERCENT'].VISIBILITY
          },
        },
        '100%': {
          onComplete: () => {
            developerTextsGroup.visible =
              developerTextsGroupConstants.ANIMATION['100_PERCENT'].VISIBILITY
          },
        },
      },
      duration: developerTextsGroupConstants.DURATION,
    },
    delay: developerTextsGroupConstants.LABEL,
  }
}
