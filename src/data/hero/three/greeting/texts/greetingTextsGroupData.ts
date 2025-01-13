import type { TElementAnimationData } from '@/types/data/animation/types'
import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as greetingGroupConstants } from '@/constants/hero/three/greeting/greetingGroupConstants.json'
import { default as greetingTextsGroupConstants } from '@/constants/hero/three/greeting/texts/greetingTextsGroupConstants.json'

export const greetingTextsGroupDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(greetingTextsGroupConstants),
}

export function getGreetingTextsGroupAnimationsData(): TElementAnimationData {
  return {
    label: greetingGroupConstants.label,
    duration: greetingGroupConstants.duration,
    animations: {
      ...getAnimationsData(greetingGroupConstants.duration, greetingTextsGroupConstants),
    },
  }
}
