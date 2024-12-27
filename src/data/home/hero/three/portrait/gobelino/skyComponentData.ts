import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as skyComponentConstants } from '@/constants/home/hero/three/portrait/gobelino/skyComponentConstants.json'

export const getSkyComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(skyComponentConstants),
}

export function getSkyComponentAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
  }
}
