import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as greetingGroupConstants } from '@/constants/hero/three/greeting/greetingGroupConstants.json'

export const getGreetingGroupDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(greetingGroupConstants),
}

export function getGreetingGroupAnimationsData(): TElementAnimationData {
  return {
    label: greetingGroupConstants.label,
    duration: greetingGroupConstants.duration,
  }
}
