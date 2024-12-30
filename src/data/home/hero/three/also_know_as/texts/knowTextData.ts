import type { TDefaultValuesData } from '@/types/animation/three/types'

import { getDefaultValues } from '@/helpers/animations/three/animationsHelpers'

import { default as knowTextConstants } from '@/constants/home/hero/three/also_know_as/texts/knowTextConstants.json'

export const getKnowTextDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(knowTextConstants),
}
