import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getAnimationsData } from '@/helpers/animationHelpers'

import { default as contactMeGroupConstants } from '@/constants/contact/three/contact_me/contactMeGroupConstants.json'
import { default as iphoneKeyboardConstants } from '@/constants/contact/three/contact_me/iphoneKeyboardConstants.json'

export const getContactMeGroupDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(contactMeGroupConstants),
}

export function getContactMeGroupAnimationsData(): TElementAnimationData {
  return {
    label: contactMeGroupConstants.label,
    duration: contactMeGroupConstants.duration,
    animations: {
      ...getAnimationsData(contactMeGroupConstants.duration, contactMeGroupConstants),
    },
  }
}

export function getIphoneKeyboardAnimationsData(): TElementAnimationData {
  return {
    label: contactMeGroupConstants.label,
    duration: contactMeGroupConstants.duration,
    animations: {
      ...getAnimationsData(contactMeGroupConstants.duration, iphoneKeyboardConstants),
    },
  }
}
