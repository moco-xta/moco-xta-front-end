import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as foregroundGroupConstants } from '@/constants/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as ganeshComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/ganeshComponentConstants.json'

export const getGaneshComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(ganeshComponentConstants),
}

export function getGaneshComponentAnimationsData(): TElementAnimationData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, ganeshComponentConstants),
    },
  }
}
