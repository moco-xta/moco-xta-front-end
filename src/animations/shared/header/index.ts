import { default as headerAnimationsConstants } from '@/constants/animations/shared/headerAnimationsConstants.json'

export const logoMocoAnimation = {
  selector: headerAnimationsConstants.LOGO_MOCO.SELECTOR,
  params: {
    y: headerAnimationsConstants.LOGO_MOCO.PARAMS.Y,
    opacity: headerAnimationsConstants.LOGO_MOCO.PARAMS.OPACITY,
    // delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER + 1,
    delay: 0,
    duration: headerAnimationsConstants.LOGO_MOCO.PARAMS.DURATION,
    ease: headerAnimationsConstants.LOGO_MOCO.PARAMS.EASE,
  },
}

export const navAnimation = {
  selector: headerAnimationsConstants.NAV.SELECTOR,
  params: {
    y: headerAnimationsConstants.NAV.PARAMS.Y,
    opacity: headerAnimationsConstants.NAV.PARAMS.OPACITY,
    // delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER + 1,
    delay: 0,
    duration: headerAnimationsConstants.NAV.PARAMS.DURATION,
    stagger: headerAnimationsConstants.NAV.PARAMS.STAGGER,
    ease: headerAnimationsConstants.NAV.PARAMS.EASE,
  },
}
