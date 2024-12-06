import { default as cursorAnimationsConstants } from '@/constants/animations/cursorAnimationsConstants.json'

export const cursorAnimation = {
  scope: cursorAnimationsConstants.SCOPE,
  selector: cursorAnimationsConstants.SELECTOR,
  params: {
    duration: cursorAnimationsConstants.PARAMS.DURATION,
    ease: cursorAnimationsConstants.PARAMS.EASE,
  },
}
