import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as alsoTextConstants } from '@/constants/hero/three/also_know_as/texts/alsoTextConstants.json'

export const getAlsoTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(alsoTextConstants),
}
