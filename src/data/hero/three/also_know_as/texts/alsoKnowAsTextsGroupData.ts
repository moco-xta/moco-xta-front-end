import * as THREE from 'three'

import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDegreeEuler } from '@/helpers/threeHelpers'

import { default as foregroundGroupConstants } from '@/constants/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as alsoKnowAsTextsGroupConstants } from '@/constants/hero/three/also_know_as/texts/alsoKnowAsTextsGroupConstants.json'

export const alsoKnowAsTextsGroupDefaultValues: TElementDefaultValues = {
  name: alsoKnowAsTextsGroupConstants.defaultValues.name,
  visible: alsoKnowAsTextsGroupConstants.defaultValues.visible,
  position: new THREE.Vector3(
    alsoKnowAsTextsGroupConstants.defaultValues.position.x,
    foregroundGroupConstants.defaultValues.position.y,
    alsoKnowAsTextsGroupConstants.defaultValues.position.z,
  ),
  rotation: getDegreeEuler(alsoKnowAsTextsGroupConstants.defaultValues.rotation),
}

export function getAlsoKnowAsTextsGroupAnimationsData(): TElementAnimationData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
  }
}
