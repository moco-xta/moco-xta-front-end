import type { TDefaultValuesData } from '@/types/animation/types'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as asTextConstants } from '@/constants/home/hero/three/also_know_as/texts/asTextConstants.json'

export const getAsTextDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(asTextConstants),
}
