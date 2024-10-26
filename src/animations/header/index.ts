import { default as preloaderAnimationsConstants } from '@/constants/animations/preloaderAnimationsConstants.json'
import { default as headerAnimationsConstants } from '@/constants/animations/headerAnimationsConstants.json'

// LOGO TRANSLATION

export const logoMocoAnimation = {
  translation: {
    selector: headerAnimationsConstants.LOGO_MOCO.TRANSLATION.SELECTOR,
    params: {
      y: headerAnimationsConstants.LOGO_MOCO.TRANSLATION.PARAMS.Y,
      duration: headerAnimationsConstants.LOGO_MOCO.TRANSLATION.PARAMS.DURATION,
      ease: headerAnimationsConstants.LOGO_MOCO.TRANSLATION.PARAMS.EASE,
      delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER,
    },
  },
  opacity: {
    params: {
      opacity: headerAnimationsConstants.LOGO_MOCO.OPACITY.OPACITY,
      duration: headerAnimationsConstants.LOGO_MOCO.OPACITY.DURATION,
      ease: headerAnimationsConstants.LOGO_MOCO.OPACITY.EASE,
      delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER,
    },
  },
}
