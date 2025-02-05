import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'

import { default as contactMeGroupConstants } from '@/constants/contact/three/contact_me/contactMeGroupConstants.json'
import { default as contactTextConstants } from '@/constants/contact/three/contact_me/texts/contactTextConstants.json'

export const contactTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(contactTextConstants),
}
