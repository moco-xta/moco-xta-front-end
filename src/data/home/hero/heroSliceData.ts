import type { TElementData } from '@/types/animation/html/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/html/animationHelpers'

import { default as heroSliceConstants } from '@/constants/home/hero/heroSliceConstants.json'

export const heroSliceDefaultValues = {
  ...getDefaultValues(heroSliceConstants),
}

export function getHeroSliceAnimationsData(): TElementData {
  return {
    label: heroSliceConstants.label,
    duration: heroSliceConstants.duration,
    animations: {
      ...getAnimationsData(heroSliceConstants),
    },
  }
}
