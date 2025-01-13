import type { ComponentType, LazyExoticComponent, MutableRefObject } from 'react'
import * as THREE from 'three'
import type { MeshProps } from '@react-three/fiber'

import type { TLogoData, TPerspectiveCameraData } from '@/types/data/components/three/types'

// PLAYER

export type TPlayer = {
  cameraDefaultValues: TPerspectiveCameraData
  speed?: number
  jumpForce?: number
}

export type TPlayerCamera = {
  cameraDefaultValues: TPerspectiveCameraData
}

export type TPlayerPointerLockControls = {
  pointerLockControlsSelector: string
}

// SKILL LOGO

export type TSkillLogoCanvas = {
  logoData: TLogoData
}

export type TSkillLogo = {
  logoData: TLogoData
}

// RUBIKS CUBE

export type TCube = {
  coordinates: THREE.Vector3
  padIndexRef: MutableRefObject<number>
}

// PADS

export type TPads = {
  coordinates: THREE.Vector3
  padIndexRef: MutableRefObject<number>
}

export type TPad = {
  currentPadIndex: number
  rotation: THREE.Euler
}

// RUBIKS CUBE

export type TLazyPad = LazyExoticComponent<ComponentType<MeshProps>>

// SKILLS

export type TPointer = {
  pointerRef: MutableRefObject<THREE.Vector3>
}

export type TResourcesLogo = {
  pathToModel: string
  componentName: string
}

// PHYSICS

export type TPhysicsGround = {
  args: [number, number]
}
