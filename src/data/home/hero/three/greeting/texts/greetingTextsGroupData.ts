import type { TDefaultValuesData, TElementData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'
import { default as greetingTextsGroupConstants } from '@/constants/home/hero/three/greeting/texts/greetingTextsGroupConstants.json'

export const greetingTextsGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(greetingTextsGroupConstants),
}

export function greetingTextsGroupAnimationsData(): TElementData {
  return {
    label: greetingGroupConstants.label,
    duration: greetingGroupConstants.duration,
    animations: {
      ...getAnimationsData(greetingGroupConstants.duration, greetingTextsGroupConstants),
    },
  }
}
