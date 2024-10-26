import { default as preloaderAnimationsConstants } from '@/constants/animations/preloaderAnimationsConstants.json'

// TEXT

export const preloaderTextAnimation = {
  selector: preloaderAnimationsConstants.TEXT.SELECTOR,
  from: {
    params: {
      y: preloaderAnimationsConstants.TEXT.FROM.PARAMS.Y,
      opacity: preloaderAnimationsConstants.TEXT.FROM.PARAMS.OPACITY,
      duration: preloaderAnimationsConstants.TEXT.FROM.PARAMS.DURATION,
      delay: preloaderAnimationsConstants.TEXT.FROM.PARAMS.DELAY,
      stagger: preloaderAnimationsConstants.TEXT.FROM.PARAMS.STAGGER,
      ease: preloaderAnimationsConstants.TEXT.FROM.PARAMS.EASE,
    },
  },
  to: {
    params: {
      y: preloaderAnimationsConstants.TEXT.TO.PARAMS.Y,
      opacity: preloaderAnimationsConstants.TEXT.TO.PARAMS.OPACITY,
      duration: preloaderAnimationsConstants.TEXT.TO.PARAMS.DURATION,
      stagger: preloaderAnimationsConstants.TEXT.TO.PARAMS.STAGGER,
      ease: preloaderAnimationsConstants.TEXT.TO.PARAMS.EASE,
    },
    offset_delay: preloaderAnimationsConstants.TEXT.TO.OFFSET_DELAY,
  },
}

// PRELOADER SLICE

export const preloaderSliceAnimation = {
  selector: preloaderAnimationsConstants.SLICE.SELECTOR,
  params: {
    y: preloaderAnimationsConstants.SLICE.PARAMS.Y,
    duration: preloaderAnimationsConstants.SLICE.PARAMS.DURATION,
  },
}
