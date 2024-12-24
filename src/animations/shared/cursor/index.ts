import { default as cursorConstants } from '@/constants/animations/shared/cursorConstants.json'

export const cursorAnimation = {
  scope: cursorConstants.SCOPE,
  selector: cursorConstants.SELECTOR,
  params: {
    duration: cursorConstants.PARAMS.DURATION,
    ease: cursorConstants.PARAMS.EASE,
  },
}
