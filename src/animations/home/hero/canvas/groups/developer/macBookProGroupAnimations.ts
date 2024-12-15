import { default as macBookProGroupConstants } from '@/constants/animations/home/hero/canvas/groups/developer/macBookProGroupConstants.json'

export const macBookProGroupAnimations = (macBookProGroup: THREE.Group) => {
  return {
    visibility: {
      keyframes: {
        '0%': {
          onComplete: () => {
            macBookProGroup.visible = macBookProGroupConstants.ANIMATION['0_PERCENT'].VISIBILITY
          },
        },
        '100%': {
          onComplete: () => {
            macBookProGroup.visible = macBookProGroupConstants.ANIMATION['100_PERCENT'].VISIBILITY
          },
        },
      },
      duration: macBookProGroupConstants.DURATION,
    },
    delay: `${macBookProGroupConstants.LABEL}+=${2}`,
  }
}
