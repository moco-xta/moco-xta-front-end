import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as gobelinoGroupConstants } from '@/constants/hero/three/portrait/gobelino/gobelinoGroupConstants.json'
import { default as hillTopLeftComponentConstants } from '@/constants/hero/three/portrait/gobelino/hillTopLeftComponentConstants.json'

export const hillTopLeftComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(hillTopLeftComponentConstants),
}

export function getHillTopLeftComponentAnimationsData(): TElementAnimationData {
  return {
    label: gobelinoGroupConstants.label,
    duration: gobelinoGroupConstants.duration,
  }
}
