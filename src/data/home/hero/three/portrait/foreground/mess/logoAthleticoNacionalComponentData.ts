import type { TDefaultValuesData, TElementData } from '@/types/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as logoAthleticoNacionalComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/logoAthleticoNacionalComponentConstants.json'

export const getLogoAthleticoNacionalComponentDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(logoAthleticoNacionalComponentConstants),
}

export function getLogoAthleticoNacionalComponentAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
    animations: {
      ...getAnimationsData(
        foregroundGroupConstants.duration,
        logoAthleticoNacionalComponentConstants,
      ),
    },
  }
}
