import { default as introductionAnimationsConstants } from '@/constants/animations/home/introductionAnimationsConstants.json'

export const introductionTextAnimation = {
  selector: introductionAnimationsConstants.INTRODUCTION_TEXT.SELECTOR,
  params: {
    opacity: introductionAnimationsConstants.INTRODUCTION_TEXT.PARAMS.OPACITY,
    stagger: introductionAnimationsConstants.INTRODUCTION_TEXT.PARAMS.STAGGER,
    scrollTrigger: {
      trigger: introductionAnimationsConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.TRIGGER,
      scroller: introductionAnimationsConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.SCROLLER,
      start: introductionAnimationsConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.START,
      end: introductionAnimationsConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.END,
      scrub: introductionAnimationsConstants.INTRODUCTION_TEXT.PARAMS.SCROLL_TRIGGER.SCRUB,
    },
  },
}
