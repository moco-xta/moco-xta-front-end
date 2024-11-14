import { default as mainSkillsAnimationsConstants } from '@/constants/animations/mainSkillsAnimationsConstants.json'

export const whatAreMySkillsAnimation = {
  selector: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.SELECTOR,
  params: {
    translateX: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.TRANSLATE_X,
    transform: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.TRANSFORM,
    opacity: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.OPACITY,
    stagger: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.STAGGER,
    scrollTrigger: {
      trigger: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.SCROLL_TRIGGER.TRIGGER,
      scroller: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.SCROLL_TRIGGER.SCROLLER,
      start: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.SCROLL_TRIGGER.START,
      end: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.SCROLL_TRIGGER.END,
      scrub: mainSkillsAnimationsConstants.WHAT_ARE_MY_SKILLS.PARAMS.SCROLL_TRIGGER.SCRUB,
    },
  },
}

export const frameworkSkillsAnimation = {
  selector: mainSkillsAnimationsConstants.FRAMEWORK_SKILLS.SELECTOR,
  params: {
    translateY: mainSkillsAnimationsConstants.FRAMEWORK_SKILLS.PARAMS.TRANSLATE_Y,
    ease: mainSkillsAnimationsConstants.FRAMEWORK_SKILLS.PARAMS.EASE,
    scrollTrigger: {
      trigger: mainSkillsAnimationsConstants.FRAMEWORK_SKILLS.PARAMS.SCROLL_TRIGGER.TRIGGER,
      scroller: mainSkillsAnimationsConstants.FRAMEWORK_SKILLS.PARAMS.SCROLL_TRIGGER.SCROLLER,
      start: mainSkillsAnimationsConstants.FRAMEWORK_SKILLS.PARAMS.SCROLL_TRIGGER.START,
      end: mainSkillsAnimationsConstants.FRAMEWORK_SKILLS.PARAMS.SCROLL_TRIGGER.END,
      scrub: mainSkillsAnimationsConstants.FRAMEWORK_SKILLS.PARAMS.SCROLL_TRIGGER.SCRUB,
    },
  },
}

export const logoAngularAnimation = {
  selector: mainSkillsAnimationsConstants.LOGO_ANGULAR.SELECTOR,
  params: {
    paddingTop: mainSkillsAnimationsConstants.LOGO_ANGULAR.PARAMS.PADDING_TOP,
    ease: mainSkillsAnimationsConstants.LOGO_ANGULAR.PARAMS.EASE,
    scrollTrigger: {
      trigger: mainSkillsAnimationsConstants.LOGO_ANGULAR.PARAMS.SCROLL_TRIGGER.TRIGGER,
      scroller: mainSkillsAnimationsConstants.LOGO_ANGULAR.PARAMS.SCROLL_TRIGGER.SCROLLER,
      start: mainSkillsAnimationsConstants.LOGO_ANGULAR.PARAMS.SCROLL_TRIGGER.START,
      end: mainSkillsAnimationsConstants.LOGO_ANGULAR.PARAMS.SCROLL_TRIGGER.END,
      scrub: mainSkillsAnimationsConstants.LOGO_ANGULAR.PARAMS.SCROLL_TRIGGER.SCRUB,
    },
  },
}

export const logoSpringAnimation = {
  selector: mainSkillsAnimationsConstants.LOGO_SPRING.SELECTOR,
  params: {
    paddingTop: mainSkillsAnimationsConstants.LOGO_SPRING.PARAMS.PADDING_TOP,
    ease: mainSkillsAnimationsConstants.LOGO_SPRING.PARAMS.EASE,
    scrollTrigger: {
      trigger: mainSkillsAnimationsConstants.LOGO_SPRING.PARAMS.SCROLL_TRIGGER.TRIGGER,
      scroller: mainSkillsAnimationsConstants.LOGO_SPRING.PARAMS.SCROLL_TRIGGER.SCROLLER,
      start: mainSkillsAnimationsConstants.LOGO_SPRING.PARAMS.SCROLL_TRIGGER.START,
      end: mainSkillsAnimationsConstants.LOGO_SPRING.PARAMS.SCROLL_TRIGGER.END,
      scrub: mainSkillsAnimationsConstants.LOGO_SPRING.PARAMS.SCROLL_TRIGGER.SCRUB,
    },
  },
}
