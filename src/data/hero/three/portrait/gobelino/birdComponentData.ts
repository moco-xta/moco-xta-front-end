import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as gobelinoGroupConstants } from '@/constants/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as birdComponentConstants } from '@/constants/hero/three/portrait/gobelino/birdComponentConstants.json'

export const getBirdComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(birdComponentConstants),
}

export function getBirdComponentAnimationsData(): TElementAnimationData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
  }
}
