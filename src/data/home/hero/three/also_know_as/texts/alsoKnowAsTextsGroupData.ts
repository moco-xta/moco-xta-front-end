import * as THREE from 'three'

import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as alsoKnowAsTextsGroupConstants } from '@/constants/home/hero/three/also_know_as/texts/alsoKnowAsTextsGroupConstants.json'

export const getAlsoKnowAsTextsGroupDefaultValues: TDefaultValuesData = {
  visible: alsoKnowAsTextsGroupConstants.defaultValues.visible,
  position: new THREE.Vector3(
    alsoKnowAsTextsGroupConstants.defaultValues.position.x,
    foregroundGroupConstants.defaultValues.position.y,
    alsoKnowAsTextsGroupConstants.defaultValues.position.z,
  ),
}

export function getAlsoKnowAsTextsGroupAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
  }
}
