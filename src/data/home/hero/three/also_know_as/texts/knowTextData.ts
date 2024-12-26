import type { TDefaultValuesData } from '@/types/animation/types'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as knowTextConstants } from '@/constants/home/hero/three/also_know_as/texts/knowTextConstants.json'

export const getKnowTextDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(knowTextConstants),
}
