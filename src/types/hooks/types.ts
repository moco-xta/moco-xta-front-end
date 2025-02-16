import { MutableRefObject } from 'react'
import * as THREE from 'three'

import type { THoverModelAnimation } from '../components/three/animation/types'

// useHoverModelAnimation

export type TUseHoverModelAnimation = {
  ref: MutableRefObject<THREE.Group | THREE.Mesh>
  animationData: THoverModelAnimation
  offset?: THREE.Vector3
}
