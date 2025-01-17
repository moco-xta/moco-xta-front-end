import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animationHelpers'

import { default as foregroundGroupConstants } from '@/constants/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as logoAthleticoNacionalComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/logoAthleticoNacionalComponentConstants.json'

export const logoAthleticoNacionalComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(logoAthleticoNacionalComponentConstants),
}

export function getLogoAthleticoNacionalComponentAnimationsData(): TElementAnimationData {
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
