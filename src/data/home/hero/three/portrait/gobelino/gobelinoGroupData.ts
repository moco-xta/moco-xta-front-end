import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'

export const getGobelinoGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(gobelinoGroupConstants),
}

export function getGobelinoGroupAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
  }
}
