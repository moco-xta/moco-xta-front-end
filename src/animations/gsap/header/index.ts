import { default as preloaderAnimationsConstants } from '@/constants/animations/preloaderAnimationsConstants.json'
import { default as headerAnimationsConstants } from '@/constants/animations/headerAnimationsConstants.json'

// LOGO

export const logoMocoAnimation = {
  selector: headerAnimationsConstants.LOGO_MOCO.SELECTOR,
  params: {
    y: headerAnimationsConstants.LOGO_MOCO.PARAMS.Y,
    opacity: headerAnimationsConstants.LOGO_MOCO.PARAMS.OPACITY,
    delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER,
    duration: headerAnimationsConstants.LOGO_MOCO.PARAMS.DURATION,
    ease: headerAnimationsConstants.LOGO_MOCO.PARAMS.EASE,
  },
}

// NAV

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
