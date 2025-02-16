import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getAnimationsData } from '@/helpers/animationHelpers'

import { default as phoneNumberGroupConstants } from '@/constants/contact/three/phone_number/phoneNumberGroupConstants.json'
import { default as iphoneKeyboardTouchsGroupConstants } from '@/constants/contact/three/phone_number/iphoneKeyboardTouchsGroupConstants.json'
import { default as iphoneKeyboardTouchsConstants } from '@/constants/contact/three/phone_number/iphoneKeyboardTouchsConstants.json'

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

export function getIphoneKeyboardTouchsGroupAnimationsData(): TElementAnimationData {
  return {
    label: phoneNumberGroupConstants.label,
    duration: phoneNumberGroupConstants.duration,
    animations: {
      ...getAnimationsData(phoneNumberGroupConstants.duration, iphoneKeyboardTouchsGroupConstants),
    },
  }
}

export function getIphoneKeyboardTouchsAnimationsData(): TElementAnimationData {
  return {
    label: phoneNumberGroupConstants.label,
    duration: phoneNumberGroupConstants.duration,
    animations: {
      ...getAnimationsData(phoneNumberGroupConstants.duration, iphoneKeyboardTouchsConstants),
    },
  }
}
