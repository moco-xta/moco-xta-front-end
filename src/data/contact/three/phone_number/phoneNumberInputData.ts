import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getAnimationsData } from '@/helpers/animationHelpers'

import { default as phoneNumberGroupConstants } from '@/constants/contact/three/phone_number/phoneNumberGroupConstants.json'
import { default as phoneNumberInputConstants } from '@/constants/contact/three/phone_number/phoneNumberInputConstants.json'

export const getPhoneNumberinputDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(phoneNumberInputConstants),
}

export function getPhoneNumberInputAnimationsData(): TElementAnimationData {
  return {
    label: phoneNumberGroupConstants.label,
    duration: phoneNumberGroupConstants.duration,
    animations: {
      ...getAnimationsData(phoneNumberGroupConstants.duration, phoneNumberInputConstants),
    },
  }
}
