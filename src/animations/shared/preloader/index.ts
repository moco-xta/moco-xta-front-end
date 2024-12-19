import { default as preloaderConstants } from '@/constants/animations/shared/preloaderConstants.json'

// TEXT

export const preloaderH1Animation = {
  selector: preloaderConstants.H1.SELECTOR,
  from: {
    params: {
      y: preloaderConstants.H1.FROM.PARAMS.Y,
      opacity: preloaderConstants.H1.FROM.PARAMS.OPACITY,
      delay: preloaderConstants.H1.FROM.PARAMS.DELAY,
      duration: preloaderConstants.H1.FROM.PARAMS.DURATION,
      stagger: preloaderConstants.H1.FROM.PARAMS.STAGGER,
      ease: preloaderConstants.H1.FROM.PARAMS.EASE,
    },
  },
  to: {
    params: {
      y: preloaderConstants.H1.TO.PARAMS.Y,
      opacity: preloaderConstants.H1.TO.PARAMS.OPACITY,
      duration: preloaderConstants.H1.TO.PARAMS.DURATION,
      stagger: preloaderConstants.H1.TO.PARAMS.STAGGER,
      ease: preloaderConstants.H1.TO.PARAMS.EASE,
    },
    offset_delay: preloaderConstants.H1.TO.OFFSET_DELAY,
  },
}

// PRELOADER SLICE

export const preloaderSliceAnimation = {
  selector: preloaderConstants.SLICE.SELECTOR,
  params: {
    y: preloaderConstants.SLICE.PARAMS.Y,
    duration: preloaderConstants.SLICE.PARAMS.DURATION,
  },
}
