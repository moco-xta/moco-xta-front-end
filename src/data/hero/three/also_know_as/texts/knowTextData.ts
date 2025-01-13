import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as knowTextConstants } from '@/constants/hero/three/also_know_as/texts/knowTextConstants.json'

export const getKnowTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(knowTextConstants),
}
