import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as mocoGroupConstants } from '@/constants/home/hero/three/moco/mocoGroupConstants.json'

export const mocoGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(mocoGroupConstants),
}

export function getMocoGroupAnimationsData(): TElementData {
  return {
    label: mocoGroupConstants.label,
    duration: mocoGroupConstants.duration,
  }
}
