import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as asTextConstants } from '@/constants/hero/three/also_know_as/texts/asTextConstants.json'

export const getAsTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(asTextConstants),
}
