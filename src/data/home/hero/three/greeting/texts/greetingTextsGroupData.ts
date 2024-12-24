import type { TGroup } from '@/types/animation/three/componentsTypes'
import type { TElementData, TConstantsData, TDefaultValues } from '@/types/animation/dataTypes'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'
import { default as greetingTextsGroupConstants } from '@/constants/home/hero/three/greeting/texts/greetingTextsGroupConstants.json'

export const greetingTextsGroupDefaultValues: TDefaultValues<TGroup> = {
  ...getDefaultValues(greetingTextsGroupConstants),
}

export function greetingTextsGroupAnimationsData(): TElementData<TGroup> {
  return {
    label: greetingGroupConstants.label,
    duration: greetingGroupConstants.duration,
    animations: {
      ...getAnimationsData(
        greetingGroupConstants.duration,
        greetingTextsGroupConstants as TConstantsData<TGroup>,
      ),
    },
  }
}
