import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as frontTextConstants } from '@/constants/hero/three/developer/texts/frontTextConstants.json'

export const frontTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(frontTextConstants),
}
