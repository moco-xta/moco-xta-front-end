import type { TDefaultValuesData, TElementData } from '@/types/animation/three/types'

import {
  getAnimationsData,
  getDefaultValuesArray,
} from '@/helpers/animations/three/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as cloudsConstants } from '@/constants/home/hero/three/portrait/gobelino/cloudsConstants.json'

export const cloudsDefaultValues: TDefaultValuesData[] = getDefaultValuesArray(cloudsConstants)

export function getCloudsAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
    animations: {
      ...getAnimationsData(gobelinoGroupConstants.duration, cloudsConstants),
    },
  }
}
