import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as developerTextConstants } from '@/constants/hero/three/developer/texts/developerTextConstants.json'

export const developerTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(developerTextConstants),
}
