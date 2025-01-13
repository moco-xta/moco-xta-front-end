import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as endTextConstants } from '@/constants/hero/three/developer/texts/endTextConstants.json'

export const endTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(endTextConstants),
}
