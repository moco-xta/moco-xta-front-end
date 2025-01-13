import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as aTextConstants } from '@/constants/hero/three/developer/texts/aTextConstants.json'

export const aTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(aTextConstants),
}
