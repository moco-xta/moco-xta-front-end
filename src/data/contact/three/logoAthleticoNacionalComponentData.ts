import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animationHelpers'

import { default as logoAthleticoNacionalComponentConstants } from '@/constants/contact/three/logoAthleticoNacionalComponentConstants.json'

export const getLogoAthleticoNacionalComponentDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(logoAthleticoNacionalComponentConstants),
}
