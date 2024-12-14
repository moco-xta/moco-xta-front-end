import { default as introductionConstants } from '@/constants/animations/home/introductionConstants.json'

export const introductionTextAnimation = {
  selector: introductionConstants.INTRODUCTION_TEXT.SELECTOR,
  params: {
    opacity: introductionConstants.INTRODUCTION_TEXT.PARAMS.OPACITY,
    stagger: introductionConstants.INTRODUCTION_TEXT.PARAMS.STAGGER,
    scrollTrigger: {
      trigger: introductionConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.TRIGGER,
      scroller: introductionConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.SCROLLER,
      start: introductionConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.START,
      end: introductionConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.END,
      scrub: introductionConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.SCRUB,
    },
  },
}
