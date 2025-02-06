// import * as THREE from 'three'

import type { TElementDefaultValues } from '@/types/data/animation/three/types'
// import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
// import { getKeyframePosition } from '@/helpers/animationHelpers'

import { default as basedInParisGroupConstants } from '@/constants/contact/three/based_in/basedInParisGroupConstants.json'
import { default as imTextConstants } from '@/constants/contact/three/based_in/texts/imTextConstants.json'

export function getImTextDefaultValues(): TElementDefaultValues {
  return getDefaultValues(imTextConstants)
}

export function getImTextAnimationsData(): TElementAnimationData {
  return {
    label: basedInParisGroupConstants.label,
    duration: basedInParisGroupConstants.duration,
  }
}
