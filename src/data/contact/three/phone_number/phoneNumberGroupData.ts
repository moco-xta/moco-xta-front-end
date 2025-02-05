import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'
import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getAnimationsData } from '@/helpers/animationHelpers'

import { default as phoneNumberGroupConstants } from '@/constants/contact/three/phone_number/phoneNumberGroupConstants.json'
import { default as iphoneKeyboardConstants } from '@/constants/contact/three/phone_number/iphoneKeyboardConstants.json'

export const getPhoneNumberGroupDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(phoneNumberGroupConstants),
}

export function getPhoneNumberGroupAnimationsData(): TElementAnimationData {
  return {
    label: phoneNumberGroupConstants.label,
    duration: phoneNumberGroupConstants.duration,
    animations: {
      ...getAnimationsData(phoneNumberGroupConstants.duration, phoneNumberGroupConstants),
    },
  }
}

export function getIphoneKeyboardAnimationsData({
  index,
}: TGetAnimationsDataSignature): TElementAnimationData {
  return {
    label: phoneNumberGroupConstants.label,
    duration: phoneNumberGroupConstants.duration,
    animations: {
      ...getAnimationsData(phoneNumberGroupConstants.duration, iphoneKeyboardConstants),
    },
  }
}
