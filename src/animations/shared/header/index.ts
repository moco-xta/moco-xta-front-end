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