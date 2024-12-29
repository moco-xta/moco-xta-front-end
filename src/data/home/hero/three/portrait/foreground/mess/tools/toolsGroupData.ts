import type { TDefaultValuesData, TElementData } from '@/types/animation/three/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as toolsGroupConstants } from '@/constants/home/hero/three/portrait/foreground/mess//tools/toolsGroupConstants.json'

export const getToolsGroupDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(toolsGroupConstants),
}

export function getToolsGroupComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, toolsGroupConstants),
    },
  }
}
