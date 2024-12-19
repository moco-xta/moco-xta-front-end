import { default as headerConstants } from '@/constants/animations/shared/headerConstants.json'

export const logoMocoAnimation = {
  selector: headerConstants.LOGO_MOCO.SELECTOR,
  params: {
    y: headerConstants.LOGO_MOCO.PARAMS.Y,
    opacity: headerConstants.LOGO_MOCO.PARAMS.OPACITY,
    // delay: preloaderConstants.DELAY_AFTER_PRELOADER + 1,
    delay: 0,
    duration: headerConstants.LOGO_MOCO.PARAMS.DURATION,
    ease: headerConstants.LOGO_MOCO.PARAMS.EASE,
  },
}

export const navAnimation = {
  selector: headerConstants.NAV.SELECTOR,
  params: {
    y: headerConstants.NAV.PARAMS.Y,
    opacity: headerConstants.NAV.PARAMS.OPACITY,
    // delay: preloaderConstants.DELAY_AFTER_PRELOADER + 1,
    delay: 0,
    duration: headerConstants.NAV.PARAMS.DURATION,
    stagger: headerConstants.NAV.PARAMS.STAGGER,
    ease: headerConstants.NAV.PARAMS.EASE,
  },
}
