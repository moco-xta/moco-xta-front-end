import { default as preloaderAnimationsConstants } from '@/constants/animations/preloaderAnimationsConstants.json'
import { default as headerAnimationsConstants } from '@/constants/animations/headerAnimationsConstants.json'

// LOGO TRANSLATION

export const logoMocoAnimation = {
  translation: {
    selector: headerAnimationsConstants.LOGO_MOCO.TRANSLATION.SELECTOR,
    params: {
      y: headerAnimationsConstants.LOGO_MOCO.TRANSLATION.PARAMS.Y,
      delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER,
      duration: headerAnimationsConstants.LOGO_MOCO.TRANSLATION.PARAMS.DURATION,
      ease: headerAnimationsConstants.LOGO_MOCO.TRANSLATION.PARAMS.EASE,
    },
  },
  opacity: {
    params: {
      opacity: headerAnimationsConstants.LOGO_MOCO.OPACITY.OPACITY,
      delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER,
      duration: headerAnimationsConstants.LOGO_MOCO.OPACITY.DURATION,
      ease: headerAnimationsConstants.LOGO_MOCO.OPACITY.EASE,
    },
  },
}

export const navAnimation = {
  selector: headerAnimationsConstants.NAV.SELECTOR,
  params: {
    y: headerAnimationsConstants.NAV.PARAMS.Y,
    opacity: headerAnimationsConstants.NAV.PARAMS.OPACITY,
    delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER + 1,
    duration: headerAnimationsConstants.NAV.PARAMS.DURATION,
    stagger: headerAnimationsConstants.NAV.PARAMS.STAGGER,
    ease: headerAnimationsConstants.NAV.PARAMS.EASE,
  },
}
