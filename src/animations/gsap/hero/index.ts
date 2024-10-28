import { default as preloaderAnimationsConstants } from '@/constants/animations/preloaderAnimationsConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export const heroH1Animation = {
  selector: heroAnimationsConstants.H1.SELECTOR,
  params: {
    y: heroAnimationsConstants.H1.PARAMS.Y,
    opacity: heroAnimationsConstants.H1.PARAMS.OPACITY,
    delay: preloaderAnimationsConstants.DELAY_AFTER_PRELOADER,
    duration: heroAnimationsConstants.H1.PARAMS.DURATION,
    stagger: heroAnimationsConstants.H1.PARAMS.STAGGER,
    ease: heroAnimationsConstants.H1.PARAMS.EASE,
  },
}
