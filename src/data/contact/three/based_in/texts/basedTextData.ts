// import * as THREE from 'three'

import type { TElementDefaultValues } from '@/types/data/animation/three/types'
// import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
// import { getKeyframePosition } from '@/helpers/animationHelpers'

import { default as basedInParisGroupConstants } from '@/constants/contact/three/based_in/basedInGroupConstants.json'
import { default as basedTextConstants } from '@/constants/contact/three/based_in/texts/basedTextConstants.json'

export function getBasedTextDefaultValues(): TElementDefaultValues {
  return getDefaultValues(basedTextConstants)
}

export function getBasedTextAnimationsData(): TElementAnimationData {
  return {
    label: basedInParisGroupConstants.label,
    duration: basedInParisGroupConstants.duration,
  }
}
