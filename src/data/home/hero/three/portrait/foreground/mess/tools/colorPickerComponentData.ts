import type { TDefaultValuesData, TElementData } from '@/types/animation/three/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as colorPickerComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/tools/colorPickerComponentConstants.json'

export const colorPickerComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(colorPickerComponentConstants),
}

export function getColorPickerComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(foregroundGroupConstants.duration, colorPickerComponentConstants),
    },
  }
}
