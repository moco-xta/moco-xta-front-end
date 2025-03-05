import { MutableRefObject } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { GroupProps } from '@react-three/fiber'

import type { TCameraDefaultValues, TPerspectiveCameraData } from '@/types/data/three/types'

// CUSTOM CAMERA

export type TCamera = {
  defaultValues: TCameraDefaultValues
}

export type TCustomCamera = {
  defaultValues: TCameraDefaultValues
}

// CONTROLS

export type TPlayer = {
  rigidBodyDefaultValues: {
    position: THREE.Vector3
  }
  cameraDefaultValues: TPerspectiveCameraData
  speed?: number
  jumpForce?: number
}

// MODELS

export type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.MeshStandardMaterial>
}

// LOGO MOCO

export type TLogoMocoCanvas = {
  logoMocoMaterial: THREE.Material
}

export type TLogoMoco = GroupProps & {
  material: THREE.Material
}

// HERO

export type TMocoHelium = {
  terminalType: 'isDesktop' | 'isMobile'
}

export type TPointer = {
  pointerRef: MutableRefObject<THREE.Vector3>
}

export type THeroLogo = {
  pathToModel: string
  componentName: string
}
