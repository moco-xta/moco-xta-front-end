import type { TElementData, TDefaultValuesData } from '@/types/animation/three/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as skyComponentConstants } from '@/constants/home/hero/three/portrait/gobelino/skyComponentConstants.json'

export const skyComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(skyComponentConstants),
}

export function getSkyComponentAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, skyComponentConstants),
    },
  }
}
