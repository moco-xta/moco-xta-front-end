import { default as heroSliceAnimationsConstants } from '@/constants/animations/home/hero/hero_slice/heroSliceConstants.json'

export const heroSliceAnimations = {
  portrait: {
    keyFrames: {
      '0%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['0_PERCENT'].BACKGROUND_IMAGE,
      },
      '10%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['10_PERCENT'].BACKGROUND_IMAGE,
      },
      '20%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['20_PERCENT'].BACKGROUND_IMAGE,
      },
      '30%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['30_PERCENT'].BACKGROUND_IMAGE,
      },
      '40%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['40_PERCENT'].BACKGROUND_IMAGE,
      },
      '50%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['50_PERCENT'].BACKGROUND_IMAGE,
      },
      '60%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['60_PERCENT'].BACKGROUND_IMAGE,
      },
      '70%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['70_PERCENT'].BACKGROUND_IMAGE,
      },
      '80%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['80_PERCENT'].BACKGROUND_IMAGE,
      },
      '90%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['90_PERCENT'].BACKGROUND_IMAGE,
      },
      '100%': {
        backgroundImage:
          heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['100_PERCENT'].BACKGROUND_IMAGE,
      },
      easeEach: heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION.EACH_EASE,
    },
    duration: heroSliceAnimationsConstants.SUBS.PORTRAIT.DURATION,
    delay: heroSliceAnimationsConstants.SUBS.PORTRAIT.LABEL,
  },
}
