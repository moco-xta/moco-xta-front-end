import type { TDefaultValuesData, TElementData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as paintBucketComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/tools/paintBucketComponentConstants.json'

export const paintBucketComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(paintBucketComponentConstants),
}

export function getPaintBucketComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, paintBucketComponentConstants),
    },
  }
}
