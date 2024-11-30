import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export const creativeDeveloperAnimation = {
  selector: heroAnimationsConstants.CREATIVE_DEVELOPER.SELECTOR,
  params: {
    transform: heroAnimationsConstants.CREATIVE_DEVELOPER.PARAMS.TRANSFORM,
    opacity: heroAnimationsConstants.CREATIVE_DEVELOPER.PARAMS.OPACITY,
    filter: heroAnimationsConstants.CREATIVE_DEVELOPER.PARAMS.FILTER,
    delay: heroAnimationsConstants.CREATIVE_DEVELOPER.PARAMS.DELAY,
    duration: heroAnimationsConstants.CREATIVE_DEVELOPER.PARAMS.DURATION,
    ease: heroAnimationsConstants.CREATIVE_DEVELOPER.PARAMS.EASE,
  },
}

export const mocoAnimation = {
  selector: heroAnimationsConstants.MOCO.SELECTOR,
  params: {
    transform: heroAnimationsConstants.MOCO.PARAMS.TRANSFORM,
    opacity: heroAnimationsConstants.MOCO.PARAMS.OPACITY,
    filter: heroAnimationsConstants.MOCO.PARAMS.FILTER,
    duration: heroAnimationsConstants.MOCO.PARAMS.DURATION,
    ease: heroAnimationsConstants.MOCO.PARAMS.EASE,
  },
  position_parameter: heroAnimationsConstants.MOCO.POSITION_PARAMETER,
}

export const federicoDesmoulin2024Animation = {
  selector: heroAnimationsConstants.FEDERICO_DESMOULIN_2024.SELECTOR,
  params: {
    transform: heroAnimationsConstants.FEDERICO_DESMOULIN_2024.PARAMS.TRANSFORM,
    opacity: heroAnimationsConstants.FEDERICO_DESMOULIN_2024.PARAMS.OPACITY,
    duration: heroAnimationsConstants.FEDERICO_DESMOULIN_2024.PARAMS.DURATION,
    ease: heroAnimationsConstants.FEDERICO_DESMOULIN_2024.PARAMS.EASE,
  },
  position_parameter: heroAnimationsConstants.FEDERICO_DESMOULIN_2024.POSITION_PARAMETER,
}

export const scrollDownAnimation = {
  selector: heroAnimationsConstants.SCROLL_DOWN.SELECTOR,
  params: {
    transform: heroAnimationsConstants.SCROLL_DOWN.PARAMS.TRANSFORM,
    opacity: heroAnimationsConstants.SCROLL_DOWN.PARAMS.OPACITY,
    duration: heroAnimationsConstants.SCROLL_DOWN.PARAMS.DURATION,
    ease: heroAnimationsConstants.SCROLL_DOWN.PARAMS.EASE,
  },
  position_parameter: heroAnimationsConstants.SCROLL_DOWN.POSITION_PARAMETER,
}

export const sunAnimation = {
  selector: heroAnimationsConstants.SUN.SELECTOR,
  from: {
    params: {
      transform: heroAnimationsConstants.SUN.FROM.PARAMS.TRANSFORM,
      opacity: heroAnimationsConstants.SUN.FROM.PARAMS.OPACITY,
      duration: heroAnimationsConstants.SUN.FROM.PARAMS.DURATION,
      ease: heroAnimationsConstants.SUN.FROM.PARAMS.EASE,
    },
    position_parameter: heroAnimationsConstants.SUN.FROM.POSITION_PARAMETER,
  },
  to: {
    params: {
      transform: heroAnimationsConstants.SUN.TO.TRANSFORM,
      scrollTrigger: {
        trigger: heroAnimationsConstants.SUN.TO.SCROLL_TRIGGER.TRIGGER,
        scroller: heroAnimationsConstants.SUN.TO.SCROLL_TRIGGER.SCROLLER,
        start: heroAnimationsConstants.SUN.TO.SCROLL_TRIGGER.START,
        scrub: heroAnimationsConstants.SUN.TO.SCROLL_TRIGGER.SCRUB,
      },
    },
  },
}
