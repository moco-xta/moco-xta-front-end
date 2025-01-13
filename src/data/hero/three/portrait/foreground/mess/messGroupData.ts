import * as THREE from 'three'

import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { default as foregroundGroupConstants } from '@/constants/hero/three/portrait/foreground/foregroundGroupConstants.json'
import { default as messGroupConstants } from '@/constants/hero/three/portrait/foreground/mess/messGroupConstants.json'

export const messGroupDefaultValues: TElementDefaultValues = {
  name: messGroupConstants.defaultValues.name,
  visible: messGroupConstants.defaultValues.visible,
  position: new THREE.Vector3(
    messGroupConstants.defaultValues.position.x,
    -foregroundGroupConstants.defaultValues.position.y,
    messGroupConstants.defaultValues.position.z,
  ),
}

export function getMessGroupAnimationsData(): TElementAnimationData {
  return {
    label: foregroundGroupConstants.label,
    duration: foregroundGroupConstants.duration,
  }
}
