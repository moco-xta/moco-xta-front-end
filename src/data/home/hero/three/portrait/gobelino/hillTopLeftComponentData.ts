import type { TElementData, TDefaultValuesData } from '@/types/animation/three/types'

import { getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as gobelinoGroupConstants } from '@/constants/home/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as hillTopLeftComponentConstants } from '@/constants/home/hero/three/portrait/gobelino/hillTopLeftComponentConstants.json'

export const hillTopLeftComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(hillTopLeftComponentConstants),
}

export function getHillTopLeftComponentAnimationsData(): TElementData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
  }
}
