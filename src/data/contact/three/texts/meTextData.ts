import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'

import { default as contactMeGroupConstants } from '@/constants/contact/three/contact_me/contactMeGroupConstants.json'
import { default as meTextConstants } from '@/constants/contact/three/contact_me/texts/meTextConstants.json'

export const meTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(meTextConstants),
}
