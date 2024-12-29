import type { TElementData, TDefaultValuesData } from '@/types/animation/three/types'

import { getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'

export const getGreetingGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(greetingGroupConstants),
}

export function getGreetingGroupAnimationsData(): TElementData {
  return {
    label: greetingGroupConstants.label,
    duration: greetingGroupConstants.duration,
  }
}
