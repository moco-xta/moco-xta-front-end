import * as THREE from 'three'

import type { TElementAnimationData } from '../types'

export type TGetAnimationsDataSignature = {
  index?: number
  textGroupRef?: THREE.Group
  textLengthRef?: number[]
}

export type TAnimationSignature = {
  timeline: GSAPTimeline
  ref: THREE.Group | THREE.Mesh
  animationsData: TElementAnimationData
}

export type TAnimateSignature = TAnimationSignature & {
  params?: {
    withMaterialsArray?: boolean
    elementsArray?: boolean
  }
}
