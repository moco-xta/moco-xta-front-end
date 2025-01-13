import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as gobelinoGroupConstants } from '@/constants/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as hillTopRightComponentConstants } from '@/constants/hero/three/portrait/gobelino/hillTopRightComponentConstants.json'

export const getHillTopRightComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(hillTopRightComponentConstants),
}

export function getHillTopRightComponentAnimationsData(): TElementAnimationData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
  }
}
