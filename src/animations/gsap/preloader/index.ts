import { default as preloaderAnimationsConstants } from '@/constants/animations/preloaderAnimationsConstants.json'

// TEXT

export const preloaderH1Animation = {
  selector: preloaderAnimationsConstants.H1.SELECTOR,
  from: {
    params: {
      y: preloaderAnimationsConstants.H1.FROM.PARAMS.Y,
      opacity: preloaderAnimationsConstants.H1.FROM.PARAMS.OPACITY,
      delay: preloaderAnimationsConstants.H1.FROM.PARAMS.DELAY,
      duration: preloaderAnimationsConstants.H1.FROM.PARAMS.DURATION,
      stagger: preloaderAnimationsConstants.H1.FROM.PARAMS.STAGGER,
      ease: preloaderAnimationsConstants.H1.FROM.PARAMS.EASE,
    },
  },
  to: {
    params: {
      y: preloaderAnimationsConstants.H1.TO.PARAMS.Y,
      opacity: preloaderAnimationsConstants.H1.TO.PARAMS.OPACITY,
      duration: preloaderAnimationsConstants.H1.TO.PARAMS.DURATION,
      stagger: preloaderAnimationsConstants.H1.TO.PARAMS.STAGGER,
      ease: preloaderAnimationsConstants.H1.TO.PARAMS.EASE,
    },
    offset_delay: preloaderAnimationsConstants.H1.TO.OFFSET_DELAY,
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
