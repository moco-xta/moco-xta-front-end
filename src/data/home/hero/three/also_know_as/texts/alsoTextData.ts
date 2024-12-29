import type { TDefaultValuesData } from '@/types/animation/three/types'

import { getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as alsoTextConstants } from '@/constants/home/hero/three/also_know_as/texts/alsoTextConstants.json'

export const getAlsoTextDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(alsoTextConstants),
}
