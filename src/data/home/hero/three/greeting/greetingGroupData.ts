import type { TElementData, TDefaultValuesData } from '@/types/animation/dataTypes'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'

export const greetingGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(greetingGroupConstants),
}

export function greetingGroupAnimationsData(): TElementData {
  return {
    label: greetingGroupConstants.label,
    duration: greetingGroupConstants.duration,
  }
}
