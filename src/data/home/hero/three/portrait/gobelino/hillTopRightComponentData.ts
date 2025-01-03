import type { TElementData, TDefaultValuesData } from '@/types/animation/three/types'

import { getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as hillTopRightComponentConstants } from '@/constants/home/hero/three/portrait/gobelino/hillTopRightComponentConstants.json'

export const getHillTopRightComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(hillTopRightComponentConstants),
}

export function getHillTopRightComponentAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
  }
}
