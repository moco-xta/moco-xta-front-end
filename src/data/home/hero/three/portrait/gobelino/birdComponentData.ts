import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as birdComponentConstants } from '@/constants/home/hero/three/portrait/gobelino/birdComponentConstants.json'

export const getBirdComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(birdComponentConstants),
}

export function getBirdComponentAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
  }
}