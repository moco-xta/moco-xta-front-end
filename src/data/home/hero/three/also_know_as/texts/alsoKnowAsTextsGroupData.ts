import * as THREE from 'three'

import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { setRotation } from '@/helpers/animations/animationsHelpers'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as alsoKnowAsTextsGroupConstants } from '@/constants/home/hero/three/also_know_as/texts/alsoKnowAsTextsGroupConstants.json'

export const alsoKnowAsTextsGroupDefaultValues: TDefaultValuesData = {
  name: alsoKnowAsTextsGroupConstants.defaultValues.name,
  visible: alsoKnowAsTextsGroupConstants.defaultValues.visible,
  position: new THREE.Vector3(
    alsoKnowAsTextsGroupConstants.defaultValues.position.x,
    foregroundGroupConstants.defaultValues.position.y,
    alsoKnowAsTextsGroupConstants.defaultValues.position.z,
  ),
  rotation: setRotation(alsoKnowAsTextsGroupConstants.defaultValues.rotation),
}

export function getAlsoKnowAsTextsGroupAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
  }
}
