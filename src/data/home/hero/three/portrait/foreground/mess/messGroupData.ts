import * as THREE from 'three'

import type { TElementData, TDefaultValuesData } from '@/types/animation/types'

import { default as foregroundGroupConstants } from '@/constants/home/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as messGroupConstants } from '@/constants/home/hero/three/portrait/foreground/mess/messGroupConstants.json'

export const messGroupDefaultValues: TDefaultValuesData = {
  name: messGroupConstants.defaultValues.name,
  visible: messGroupConstants.defaultValues.visible,
  position: new THREE.Vector3(
    messGroupConstants.defaultValues.position.x,
    -foregroundGroupConstants.defaultValues.position.y,
    messGroupConstants.defaultValues.position.z,
  ),
}

export function getMessGroupAnimationsData(): TElementData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
  }
}
